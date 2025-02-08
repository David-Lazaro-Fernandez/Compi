"use client"
import Image from "next/image"
import { CarIcon, HomeIcon, HeartIcon, PawPrintIcon, BikeIcon } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-32 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Encuentra el mejor seguro de auto en 5 minutos
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Comparamos por ti las mejores opciones de aseguradoras en México
            </p>
            <div className="space-y-4 max-w-4xl mx-auto">
              {/* Primera fila - Productos principales */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/seguro-auto" className="group">
                  <div className="bg-background rounded-lg border p-8 hover:shadow-md transition-shadow">
                    <div className="mb-4">
                      <CarIcon className="h-16 w-16 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-lg font-medium">Auto</p>
                      <p className="text-sm text-muted-foreground">Encuentra el mejor precio para tu auto</p>
                    </div>
                  </div>
                </a>

                <a href="/seguro-auto-hogar" className="group">
                  <div className="bg-background rounded-lg border p-8 hover:shadow-md transition-shadow">
                    <div className="mb-4">
                      <HomeIcon className="h-16 w-16 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-lg font-medium">Auto + Hogar</p>
                      <p className="text-sm text-muted-foreground">Protege tu auto y tu casa</p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Segunda fila - Productos secundarios */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a href="/seguro-moto" className="group">
                  <div className="bg-background rounded-lg border p-6 hover:shadow-md transition-shadow">
                    <div className="mb-4">
                      <BikeIcon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Motocicleta</p>
                    </div>
                  </div>
                </a>

                <a href="/seguro-mascotas" className="group">
                  <div className="bg-background rounded-lg border p-6 hover:shadow-md transition-shadow">
                    <div className="mb-4">
                      <PawPrintIcon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Mascotas</p>
                    </div>
                  </div>
                </a>

                <a href="/seguro-vida" className="group">
                  <div className="bg-background rounded-lg border p-6 hover:shadow-md transition-shadow">
                    <div className="mb-4">
                      <HeartIcon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Vida</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            <Image src="/landing/compi.png" alt="Seguro de auto" width={500} height={500} className="object-contain" priority />
          </div>
        </div>
      </div>
    </section>
  )
}

