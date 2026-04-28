import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f1720",
        sand: "#d5c2a7",
        stone: "#766a5a",
        ember: "#c4632f",
        ash: "#f5f1ea",
        steel: "#435361",
      },
      boxShadow: {
        soft: "0 30px 80px rgba(15, 23, 32, 0.12)",
      },
      backgroundImage: {
        hero:
          "linear-gradient(135deg, rgba(15,23,32,0.94), rgba(15,23,32,0.72)), radial-gradient(circle at top right, rgba(196,99,47,0.38), transparent 30%), linear-gradient(160deg, #1f2d36 0%, #131b23 35%, #263642 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
