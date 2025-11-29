import os

# Code chuẩn cho Next.js 14 (Không dùng Geist)
code = r"""import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", display: "swap" });

export const metadata: Metadata = {
  title: "Autonomy OS | The Operating System for Machines",
  description: "Next-generation AI orchestration for industrial autonomy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} bg-deep-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
"""

# Ghi đè file cũ
with open("src/app/layout.tsx", "w") as f:
    f.write(code)

print("SUCCESS: Removed Geist font. Layout is now compatible with Next.js 14!")
