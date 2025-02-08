import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

