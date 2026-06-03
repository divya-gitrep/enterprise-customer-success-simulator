import type { Metadata } from "next";
import { AppShell } from "./components/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enterprise Customer Success Simulator",
  description: "A professional SaaS simulation workspace for customer success teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#f5f7fb] text-slate-950">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
