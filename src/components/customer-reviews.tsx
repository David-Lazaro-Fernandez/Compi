import { Star } from "lucide-react"
import { Card, CardContent } from "~/components/ui/card"
import { Button } from "~/components/ui/button"

const reviews = [
  {
    text: "Tuve una respuesta rápida y un excelente servicio. Un agradecimiento especial al trabajo de María. Gracias a ustedes, me ahorré casi el 50% en comparación con mi seguro anterior.",
    author: "Miguel H.",
    highlight: "me ahorré casi el 50% en comparación con mi seguro anterior",
  },
  {
    text: "Rápido y sencillo. Solo ingresas tus datos y obtienes una lista de cotizaciones para elegir, y puedes contratar inmediatamente.",
    author: "Teresa R.",
    highlight: "Rápido y sencillo",
  },
  {
    text: "Ahorré más del 50% en el seguro de auto con la misma cobertura que tenía con una compañía con la que había estado durante 13 años.",
    author: "Ángela D.",
    highlight: "Ahorré más del 50% en el seguro de auto",
  },
]

export function CustomerReviews() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Más de 1 millón de cotizaciones y contando</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Lee lo que nuestros clientes dicen sobre nuestros ahorros, servicio al cliente y transparencia.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < 4.5 ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                />
              ))}
            </div>
            <span className="font-semibold text-lg">4.5</span>
            <img src="/placeholder.svg" alt="Trustpilot" className="h-6 ml-2" />
            <span className="text-sm text-muted-foreground ml-2">más de 300 reseñas</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <blockquote className="space-y-4">
                  <p className="text-lg">"{review.text.replace(review.highlight, `${review.highlight}`)}"</p>
                  <footer className="text-right text-muted-foreground">- {review.author}</footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            Ver más reseñas
          </Button>
        </div>
      </div>
    </section>
  )
}

