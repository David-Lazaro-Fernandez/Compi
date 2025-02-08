import Image from "next/image"

export function Partners() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-lg mb-8">Trabajamos con las mejores aseguradoras</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-12 w-full max-w-[200px]">
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

