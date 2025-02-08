"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Car, Dog, ClipboardCheck, Clock, Shield } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function WelcomePage() {
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)

  const steps = [
    {
      title: "Información Básica",
      description: "Cuéntanos sobre ti y tu vehículo para encontrar las mejores opciones.",
      icon: ClipboardCheck,
    },
    {
      title: "Comparación Instantánea",
      description: "Nuestro sistema analiza las mejores aseguradoras para ti en segundos.",
      icon: Clock,
    },
    {
      title: "Cobertura Perfecta",
      description: "Selecciona el plan que mejor se adapte a tus necesidades y presupuesto.",
      icon: Shield,
    },
  ]

  return (
    <div className="mx-auto max-w-3xl px-4">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <div className="mb-6 flex justify-center space-x-6">
          <Car className="h-16 w-16 text-primary" />
          <Dog className="h-16 w-16 text-primary" />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">¡Bienvenido a CompiSeguros!</h1>
        <p className="text-lg text-muted-foreground">
          Encuentra el seguro perfecto para tu auto en menos de 3 minutos. Comparamos las mejores opciones para ti.
        </p>
      </div>

      {/* Steps Section */}
      <div className="mb-12 grid gap-8 md:grid-rows-3">
        {steps.map((step, index) => (
          <div key={index} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <step.icon className="mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Terms and Continue Section */}
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
              className="mt-1"
            />
            <label
              htmlFor="terms"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              He leído y acepto los{" "}
              <Link href="/terms" className="text-primary hover:font-bold hover:underline">
                Términos y Condiciones
              </Link>{" "}
              y el{" "}
              <Link href="/privacy" className="text-primary hover:font-bold hover:underline">
                Aviso de Privacidad
              </Link>{" "}
              de Compi.
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="privacy"
              checked={acceptedPrivacy}
              onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
              className="mt-1"
            />
            <label
              htmlFor="privacy"
              className="text-sm leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Autorizo el tratamiento de mis datos personales conforme a lo establecido en el{" "}
              <Link href="/privacy" className="text-primary hover:font-bold hover:underline">
                Aviso de Privacidad
              </Link>
              , con el fin de gestionar mi cotización, contratación de seguros y servicios relacionados, incluyendo la
              comunicación por medios electrónicos.
            </label>
          </div>
        </div>

        <Link
          href={acceptedTerms && acceptedPrivacy ? "/onboarding/tu-seguro" : "#"}
          className={!(acceptedTerms && acceptedPrivacy) ? "pointer-events-none" : ""}
        >
          <Button className="w-full mt-10" size="lg" disabled={!(acceptedTerms && acceptedPrivacy)}>
            Continuar
          </Button>
        </Link>
      </div>
    </div>
  )
}

