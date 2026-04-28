import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Noor Build | Construction Company in Oman",
  description:
    "Professional construction website starter for an Oman-based company focused on trust, project proof, and lead generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="page-shell min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
