import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CompiSeguros</h3>
            <p className="text-sm text-foreground/80">
              Encuentra el mejor seguro de auto comparando las mejores opciones del mercado.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <Link href="/comparar">Comparar Seguros</Link>
              </li>
              <li>
                <Link href="/faq">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <Link href="/privacidad">Aviso de Privacidad</Link>
              </li>
              <li>
                <Link href="/terminos">Términos de Uso</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-foreground/80 hover:text-foreground">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-foreground/80 hover:text-foreground">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-foreground/80 hover:text-foreground">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} CompiSeguros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

