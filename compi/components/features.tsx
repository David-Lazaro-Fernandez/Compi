import { Shield, Zap, FileText, PiggyBank } from "lucide-react"

const features = [
  {
    icon: <Shield className="h-12 w-12 text-primary" />,
    title: "Las mejores aseguradoras",
    description: "Trabajamos con las compañías más reconocidas del mercado",
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    title: "Comparación en segundos",
    description: "Proceso rápido y fácil para encontrar tu seguro ideal",
  },
  {
    icon: <FileText className="h-12 w-12 text-primary" />,
    title: "Contratación 100% en línea",
    description: "Sin papeleo innecesario, todo desde tu computadora",
  },
  {
    icon: <PiggyBank className="h-12 w-12 text-primary" />,
    title: "Mejor precio garantizado",
    description: "Aseguramos el mejor precio del mercado para ti",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir CompiSeguros?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

