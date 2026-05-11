import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Voice Meeting Invoicer – Auto-invoice from Discord voice channel time",
  description: "Tracks time spent in Discord voice channels and automatically generates professional invoices based on hourly rates for client calls. Built for consultants and contractors."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="57cba541-08d9-4cec-94cc-0a60575191fd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
