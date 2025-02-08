"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María González",
    text: "Excelente servicio, encontré un seguro que se ajusta perfectamente a mis necesidades y a un precio increíble.",
    rating: 5,
  },
  {
    name: "Juan Pérez",
    text: "El proceso fue muy sencillo y rápido. En menos de 10 minutos ya tenía varias opciones para comparar.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    text: "Me sorprendió lo fácil que fue contratar mi seguro. El servicio al cliente es excepcional.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  const prev = () => {
    setCurrentIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl mb-4">&ldquo;{testimonials[currentIndex].text}&rdquo;</blockquote>
                <cite className="text-foreground/80 not-italic">- {testimonials[currentIndex].name}</cite>
              </div>
              <div className="flex justify-center mt-8 gap-4">
                <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Anterior testimonio</span>
                </Button>
                <Button variant="outline" size="icon" onClick={next} className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Siguiente testimonio</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

