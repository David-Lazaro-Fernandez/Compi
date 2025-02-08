import Image from "next/image"
import { Card } from "@/components/ui/card"

const insurers = [
  { name: "Qualitas", price: "$$ /mes", img: '/landing/partners/qualitas.png' },
  { name: "GNP", price: "$$ /mes", img: '/landing/partners/gnp.svg.png' },
  { name: "AXA", price: "$$ /mes", img: '/landing/partners/axa.svg.png' },
  { name: "HDI", price: "$$ /mes", img: '/landing/partners/hdi.png' },
]

export function QuoteBenefits() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Primera sección */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">Obtén cotizaciones personalizadas en 5 minutos</h2>
            <p className="text-xl text-muted-foreground">
              Encontramos las pólizas adecuadas para ti según donde vives y qué vehículo conduces.
            </p>
            <div className="space-y-2">
              {insurers.map((insurer, index) => (
                <Card key={index} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image src={insurer.img} alt={insurer.name} width={50} height={50} className="rounded-full w-12 h-12 object-contain border-[1px] border-muted-foreground/20"/>
                    <span className="font-medium">{insurer.name}</span>
                  </div>
                  <span className="text-primary font-medium">{insurer.price}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Segunda sección */}
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Un mercado único para los mejores proveedores</h3>
              <p className="text-lg text-muted-foreground">
                Revisa fácilmente cotizaciones de una amplia gama de aseguradoras lado a lado, todo en un mismo lugar.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Encuentra tu match y ahorra miles cada año</h3>
              <p className="text-lg text-muted-foreground">
                Ya sea que busques ahorrar en una póliza de auto o casa, encontramos el mejor valor para ti.
              </p>
          
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Te tenemos cubierto</h3>
              <p className="text-lg text-muted-foreground">
                A medida que tus necesidades de seguro cambien, nuestros agentes dedicados están aquí para guiarte en
                cada paso del camino.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

