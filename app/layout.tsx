import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crypto Casino Course — Build On-Chain Casino from Scratch",
  description: "Научись создавать provably fair казино на Ethereum. Solidity + Next.js + wagmi. 10 модулей, реальный проект, оплата криптой.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}<Analytics /></body>
    </html>
  );
}
