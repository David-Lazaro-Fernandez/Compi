import Image from "next/image"

const partners = [
  {
    name: "GNP",
    image: "/placeholder.svg"
  },
  {
    name: "Qualitas",
    image: "/placeholder.svg"
  },
  {
    name: "AXA",
    image: "/placeholder.svg"
  },
  {
    name: "HDI",
    image: "/placeholder.svg"
  }
]

export function Partners() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-lg mb-8">Trabajamos con las mejores aseguradoras</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="w-[200px] h-[80px] relative">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="200px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 