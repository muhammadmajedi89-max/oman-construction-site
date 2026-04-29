import express from "express";
import helmet from "helmet";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { randomUUID } from "node:crypto";
import { z } from "zod";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";

const execFileAsync = promisify(execFile);

const app = express();
app.use(helmet());
app.use(express.json({ limit: "256kb" }));

const PORT = Number(process.env.PORT ?? 8787);

type AllowedCommand =
  | "show_disk_usage"
  | "show_memory_usage"
  | "show_uptime";

type AuditEvent = {
  id: string;
  timestamp: string;
  source: "rest" | "mcp";
  command: string;
  success: boolean;
  output: string | null;
  error: string | null;
};

const auditLog: AuditEvent[] = [];

const COMMAND_MAP: Record<
  AllowedCommand,
  { bin: string; args: string[] }
> = {
  show_disk_usage: {
    bin: "df",
    args: ["-h"]
  },
  show_memory_usage: {
    bin: "free",
    args: ["-m"]
  },
  show_uptime: {
    bin: "uptime",
    args: []
  }
};

function isAllowedCommand(value: unknown): value is AllowedCommand {
  return (
    value === "show_disk_usage" ||
    value === "show_memory_usage" ||
    value === "show_uptime"
  );
}

async function runAllowedCommand(command: AllowedCommand) {
  const selected = COMMAND_MAP[command];
  const { stdout, stderr } = await execFileAsync(selected.bin, selected.args, {
    timeout: 10_000,
    maxBuffer: 1024 * 1024
  });

  const combinedOutput = [stdout, stderr].filter(Boolean).join("\n").trim();

  return {
    success: true,
    command,
    output: combinedOutput || "",
    error: null
  };
}

function recordAudit(params: {
  source: "rest" | "mcp";
  command: string;
  success: boolean;
  output: string | null;
  error: string | null;
}) {
  const event: AuditEvent = {
    id: randomUUID(),
    timestamp: new Date().toISOString(),
    source: params.source,
    command: params.command,
    success: params.success,
    output: params.output,
    error: params.error
  };

  auditLog.push(event);
  return event;
}

/**
 * -------------------------
 * REST DEBUG ENDPOINTS
 * -------------------------
 */

app.get("/healthz", (_req, res) => {
  res.json({
    status: "ok"
  });
});

app.get("/audit", (_req, res) => {
  res.json({
    success: true,
    events: auditLog
  });
});

app.post("/tools/run_command", async (req, res) => {
  const command = req.body?.command;

  if (!isAllowedCommand(command)) {
    const errorMessage =
      "Command not allowed. Allowed commands: show_disk_usage, show_memory_usage, show_uptime";

    recordAudit({
      source: "rest",
      command: String(command ?? ""),
      success: false,
      output: null,
      error: errorMessage
    });

    return res.status(400).json({
      success: false,
      command: command ?? null,
      output: null,
      error: errorMessage
    });
  }

  try {
    const result = await runAllowedCommand(command);

    recordAudit({
      source: "rest",
      command,
      success: true,
      output: result.output,
      error: null
    });

    return res.json(result);
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown command error";

    recordAudit({
      source: "rest",
      command,
      success: false,
      output: null,
      error: errorMessage
    });

    return res.status(500).json({
      success: false,
      command,
      output: null,
      error: errorMessage
    });
  }
});

/**
 * -------------------------
 * MCP SERVER
 * -------------------------
 */

function createMcpServer() {
  const server = new McpServer({
    name: "novatelia-devops-mcp",
    version: "0.1.0"
  });

  server.tool(
    "run_command",
    {
      command: z.enum([
        "show_disk_usage",
        "show_memory_usage",
        "show_uptime"
      ])
    },
    async ({ command }) => {
      try {
        const result = await runAllowedCommand(command);

        recordAudit({
          source: "mcp",
          command,
          success: true,
          output: result.output,
          error: null
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2)
            }
          ]
        };
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown command error";

        recordAudit({
          source: "mcp",
          command,
          success: false,
          output: null,
          error: errorMessage
        });

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: false,
                  command,
                  output: null,
                  error: errorMessage
                },
                null,
                2
              )
            }
          ],
          isError: true
        };
      }
    }
  );

  return server;
}

const transports = new Map<string, SSEServerTransport>();

app.get("/sse", async (_req, res) => {
  try {
    const mcpServer = createMcpServer();

    const transport = new SSEServerTransport("/messages", res);
    transports.set(transport.sessionId, transport);

    res.on("close", () => {
      transports.delete(transport.sessionId);
    });

    await mcpServer.connect(transport);
  } catch (error) {
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : "SSE connection failed"
      });
    }
  }
});

app.post("/messages", async (req, res) => {
  const sessionId = String(req.query.sessionId ?? "");
  const transport = transports.get(sessionId);

  if (!transport) {
    return res.status(404).json({
      success: false,
      error: "Unknown MCP session"
    });
  }

  try {
    await transport.handlePostMessage(req, res, req.body);
  } catch (error) {
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to handle MCP message"
      });
    }
  }
});

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: "Not found"
  });
});

app.listen(PORT, () => {
  console.log(`NOVATELIA DevOps MCP server listening on :${PORT}`);
});
