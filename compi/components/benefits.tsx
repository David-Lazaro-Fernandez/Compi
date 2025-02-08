import { Award, Zap, FileText, PiggyBank } from "lucide-react"
import Image from "next/image"

const benefits = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Las mejores aseguradoras",
    description: "Trabajamos con las compañías más reconocidas del mercado",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Comparación en segundos",
    description: "Proceso rápido y fácil para encontrar tu seguro ideal",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Contratación 100% en línea",
    description: "Sin papeleo innecesario, todo desde tu computadora",
  },
  {
    icon: <PiggyBank className="h-10 w-10 text-primary" />,
    title: "Mejor precio garantizado",
    description: "Aseguramos el mejor precio del mercado para ti",
  },
]

export function Benefits() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir CompiSeguros?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-foreground/80">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-12">
              <Image
                src="/placeholder.svg"
                alt={`Aseguradora ${i}`}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

