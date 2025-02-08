import Link from "next/link"
import type React from "react"
import { headers } from "next/headers"

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const pathname = headersList.get("referer")?.split("/").pop()
  const steps = [
    { name: "Inicio", href: "/onboarding/welcome", current: pathname === "welcome" },
    { name: "Tu Seguro", href: "/onboarding/tu-seguro", current: pathname === "tu-seguro" },
    { name: "Datos de tu auto", href: "/onboarding/datos-vehiculo", current: pathname === "datos-vehiculo" },
    { name: "Tus datos", href: "/onboarding/datos-conductor", current: pathname === "datos-conductor" },
    { name: "Selecciona tu plan", href: "/onboarding/product-selection", current: pathname === "product-selection" },
  ]


  return (
    <div className="flex min-h-screen bg-gray-50 my-4">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 px-8 py-8">
        <Link href="/" className="mb-12 block">
          <h1 className="text-2xl font-bold">CompiSeguros</h1>
        </Link>

        <nav className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-gray-200" />

          {steps.map((step) => (
            <div key={step.name} className="relative mb-8">
              <div
                className={`absolute left-0 h-6 w-6 rounded-full border-2 ${
                  step.current ? "border-primary bg-primary" : "border-gray-300 bg-white"
                }`}
              >
                {step.current && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                )}
              </div>

              <Link
                href={step.href}
                className={`ml-10 text-sm font-medium ${step.current ? "text-primary" : "text-gray-500"}`}
              >
                {step.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <main className="flex-1 px-12 py-8 bg-white">{children}</main>
    </div>
  )
}

