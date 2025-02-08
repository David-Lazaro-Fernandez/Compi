import Image from "next/image"

export function Partners() {
  const partners = [
    {
      name: "HDI Seguros",
      image: "/landing/partners/hdi.png",
    },
    {
      name: "Axa Seguros",
      image: "/landing/partners/axa.svg.png",
    },
    {
      name: "Chubb Seguros",
      image: "/landing/partners/chubb.png",
    },
    {
      name: "GNP Seguros",
      image: "/landing/partners/gnp.svg.png",
    },
    {
      name: "Atlas Seguros",
      image: "/landing/partners/atlas.webp",
    },
  ]
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-lg mb-8">Trabajamos con las mejores aseguradoras</p>
        <div className="flex flex-row  gap-8 items-center justify-center">
          {partners.map((partner) => (
            <div key={partner.name} className="relative h-12 w-full max-w-[200px]">
              <Image
                src={partner.image}
                alt={partner.name}
                width={200}
                height={100}
                className="h-20 w-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

