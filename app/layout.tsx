import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { SearchProvider } from "@/context/search-context"
import type { Metadata } from "next"
import { Open_Sans, Playfair_Display } from "next/font/google"
import type React from "react"
import "./globals.css"

// Configure Playfair Display for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

// Configure Open Sans for body text
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "E-Agos | Naratibong Salaysay ng mga Naninirahan sa Tabi ng Ilog Daet",
  description:
    "Naglalaman ito ng mga impormasyon tungkol sa Naratibong Salaysay ng mga Naninirahan sa Tabi ng Ilog Daet. Magsisilbi ang Website na ito bilang preserbasyon at Magagamit bilang kagamitang pantulong sa pagpapaunlad ng kaalaman",
  generator: 'v0.dev',
  icons: {
    icon: '/images/icon.png', // Point to your favicon image here
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fil">
      <body className={`${playfair.variable} ${openSans.variable}`}>
        <SearchProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </SearchProvider>
      </body>
    </html>
  )
}

import './globals.css'
