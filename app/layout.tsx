import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "BEOMBIOM - 지속가능성은 작게 시작해 무한히 확장됩니다",
  description:
    "BEOMBIOM develops microbial-based food waste recycling technology with hybrid processing systems and wellness devices.",
  generator: "Next.js",
  keywords: ["sustainability", "food waste", "recycling", "microbial technology", "BIOLOOP", "ZenOxy", "BUTIK"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
