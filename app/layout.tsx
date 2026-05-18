import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChangelogAI – Auto-generate changelogs from git commits",
  description: "Analyzes git commits, pull requests, and issues to automatically generate customer-facing changelogs using AI. Built for product managers and engineering leads."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a0eaba17-0c9d-4a54-9e56-ec17f3fcb065"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
