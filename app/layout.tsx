import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto, Cairo } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import Navbar from "@/components/navbar"

// Load fonts with Next.js font system
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

const cairo = Cairo({
  weight: ["400", "500", "600", "700"],
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
})

// IBM Plex Sans Arabic needs to be loaded as a local font since it's not available in the Google Fonts subset
const ibmPlexSansArabic = localFont({
  src: [
    {
      path: "../public/fonts/IBMPlexSansArabic-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/IBMPlexSansArabic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IBMPlexSansArabic-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IBMPlexSansArabic-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/IBMPlexSansArabic-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
})

export const metadata: Metadata = {
  title: "الصناعات العربية | UPAL Systems",
  description: "موقع مصنع الألمنيوم المتخصص في تصنيع منتجات الألمنيوم عالية الجودة",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className={`${inter.variable} ${roboto.variable} ${cairo.variable} ${ibmPlexSansArabic.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
