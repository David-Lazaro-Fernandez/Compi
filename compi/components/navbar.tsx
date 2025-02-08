"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const router = useRouter()
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            CompiSeguros
          </Link>

          {/* Desktop Menu - Only visible on large screens */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground">
              Inicio
            </Link>
            <Link href="/comparar" className="text-foreground/80 hover:text-foreground">
              Comparar Seguros
            </Link>
            <Link href="/faq" className="text-foreground/80 hover:text-foreground">
              Preguntas Frecuentes
            </Link>
            <Link href="/contacto" className="text-foreground/80 hover:text-foreground">
              Contacto
            </Link>
            <ThemeToggle />
            <Button onClick={() => router.push("/onboarding/welcome")}>Cotiza tu Seguro</Button>
          </div>

          {/* Tablet/Mobile Menu */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="text-2xl font-bold text-primary">
                      CompiSeguros
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-foreground/80 hover:text-foreground py-2 text-lg transition-colors"
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/comparar"
                    className="text-foreground/80 hover:text-foreground py-2 text-lg transition-colors"
                  >
                    Comparar Seguros
                  </Link>
                  <Link
                    href="/faq"
                    className="text-foreground/80 hover:text-foreground py-2 text-lg transition-colors"
                  >
                    Preguntas Frecuentes
                  </Link>
                  <Link
                    href="/contacto"
                    className="text-foreground/80 hover:text-foreground py-2 text-lg transition-colors"
                  >
                    Contacto
                  </Link>
                  <div className="pt-4">
                    <Button className="w-full">Cotiza tu Seguro</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

