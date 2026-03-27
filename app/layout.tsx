import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Dagens - Programmable Control Plane for Distributed Orchestration",
  description:
    "Programmable control-plane runtime for distributed agent and service orchestration, with durable recovery, HA failover, and first-class HITL pause/resume.",
  keywords: ["distributed systems", "agent orchestration", "control plane", "Go", "microservices", "AI agents"],
  authors: [{ name: "Dagens Team" }],
  openGraph: {
    title: "Dagens - Programmable Control Plane for Distributed Orchestration",
    description:
      "Programmable control-plane runtime for distributed agent and service orchestration, with durable recovery, HA failover, and first-class HITL pause/resume.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
