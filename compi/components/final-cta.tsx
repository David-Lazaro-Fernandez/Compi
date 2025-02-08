"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { FileText, Home, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function FinalCTA() {
  const [formData, setFormData] = useState({
    isInsured: false,
    ownsHome: false,
    birthDate: "",
    zipCode: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Obtén una cotización rápida</h2>
          <p className="text-xl text-muted-foreground">
            ¿No estás listo para comprar una póliza? Calcula cuánto costaría tu seguro de auto con nuestra calculadora.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Acerca de mí:</h3>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Necesitamos esta información para darte la mejor cotización</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card
                className={`p-6 cursor-pointer transition-all ${
                  formData.isInsured ? "border-primary ring-2 ring-primary" : ""
                }`}
                onClick={() => setFormData((prev) => ({ ...prev, isInsured: !prev.isInsured }))}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <FileText className="h-12 w-12 text-primary" />
                  <span className="font-medium">Actualmente tengo seguro</span>
                </div>
              </Card>

              <Card
                className={`p-6 cursor-pointer transition-all ${
                  formData.ownsHome ? "border-primary ring-2 ring-primary" : ""
                }`}
                onClick={() => setFormData((prev) => ({ ...prev, ownsHome: !prev.ownsHome }))}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  <Home className="h-12 w-12 text-primary" />
                  <span className="font-medium">Tengo casa propia</span>
                </div>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="birthDate" className="text-sm font-medium">
                ¿Cuándo naciste?
              </label>
              <Input
                id="birthDate"
                placeholder="DD/MM/AAAA"
                value={formData.birthDate}
                onChange={(e) => setFormData((prev) => ({ ...prev, birthDate: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="zipCode" className="text-sm font-medium">
                ¿Cuál es tu código postal?
              </label>
              <Input
                id="zipCode"
                placeholder="Ingresa tu código postal"
                value={formData.zipCode}
                onChange={(e) => setFormData((prev) => ({ ...prev, zipCode: e.target.value }))}
              />
            </div>
          </div>

          <div className="text-center">
            <Button type="submit" size="lg" className="px-8 rounded-full text-lg">
              Ver mi cotización
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

