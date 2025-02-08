import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CompiSeguros - Compara y encuentra el mejor seguro de auto",
  description:
    "Encuentra el mejor seguro de auto en minutos. Comparamos las mejores opciones de aseguradoras en México para ti.",
  keywords: "seguros de auto, comparación de seguros, seguro de coche México, cotización seguro auto",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex min-h-screen flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

