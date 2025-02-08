"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { CarIcon, CheckCircle } from "lucide-react"
import Image from "next/image"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface InsuranceOption {
    id: string
    label: string
    labelBgColor: string
    labelTextColor: string
    logo: string
    monthlyPrice: number
    annualPrice: number
    promotion: string
}

const insuranceOptions: InsuranceOption[] = [
    {
        id: "qualitas",
        label: "Más barato",
        labelBgColor: "bg-primary",
        labelTextColor: "text-white",
        logo: "/landing/partners/qualitas.png",
        monthlyPrice: 1106.05,
        annualPrice: 13272.54,
        promotion: "12 MSI con tarjeta de crédito Santander",
    },
    {
        id: "HDI Seguros",
        label: "Mejor servicio",
        labelBgColor: "bg-primary",
        labelTextColor: "text-white",
        logo: "/landing/partners/hdi.png",
        monthlyPrice: 1945.22,
        annualPrice: 23342.68,
        promotion: "12 MSI con tarjeta de crédito Santander",
    },
]

function PlanTypeSelector({ value }: { value: string }) {
    return (
        <div className="flex-1">
            <RadioGroupItem value={value} id={value} className="peer sr-only" />
            <Label
                htmlFor={value}
                className={cn(
                    `flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 
                    hover:bg-secondary hover:border-primary hover:cursor-pointer
                    peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-accent-foreground 
                    [&:has([data-state=checked])]:border-primary [&:has([data-state=checked])]:bg-primary [&:has([data-state=checked])]:text-white`
                )}
            >
                <span className="font-medium">{value}</span>
            </Label>
        </div>
    )
}
export default function ProductSelection() {
    return (
        <div className="mx-auto max-w-4xl px-4">

            {/* Coverage Info Banner */}
            <div className="mb-8 rounded-lg border border-primary bg-primary/10 p-4">
                <div className="flex items-start gap-3">

                    <div className="flex flex-col gap-2 items-start">
                        <h2 className="mb-2 font-medium text-primary flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />Estos son los mejores seguros que encontramos para ti
                        </h2>
                        <p className="text-sm text-primary flex items-center gap-2">
                            <CarIcon className="h-5 w-5 flex-shrink-0 text-primary" />Prius C Hybrid 2020
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <p className="text-lg font-medium">Elige tu tipo de plan</p>
                <RadioGroup className="flex gap-4 mt-4">
                    <PlanTypeSelector value="Básico" />
                    <PlanTypeSelector value="Limitado" />
                    <PlanTypeSelector value="Amplio" />
                </RadioGroup>
            </div>
            {/* Insurance Options */}
            <div className="space-y-4">
                {insuranceOptions.map((option) => (
                    <Card key={option.id} className="overflow-hidden">
                        <CardHeader className={`${option.labelBgColor} ${option.labelTextColor} py-2 text-center`}>
                            {option.label}
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-6">
                                    <Image
                                        src={option.logo || "/placeholder.svg"}
                                        alt={`Logo de ${option.id}`}
                                        width={120}
                                        height={40}
                                        className="object-contain"
                                    />
                                    <Checkbox id={`compare-${option.id}`} />
                                    <label
                                        htmlFor={`compare-${option.id}`}
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        COMPARAR
                                    </label>
                                </div>

                                <div className="text-right">
                                    <div className="mb-1 text-sm">{option.promotion}</div>
                                    <div className="mb-1 text-3xl font-semibold text-[#2E7D32]">
                                        $
                                        {option.monthlyPrice.toLocaleString("es-MX", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}
                                    </div>
                                    <div className="mb-4 text-sm text-gray-600">
                                        Pago anual $
                                        {option.annualPrice.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </div>
                                    <div className="space-y-2">
                                        <Button
                                            variant="outline"
                                            className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                                        >
                                            Contratar
                                        </Button>
                                        <Button variant="link" className="w-full text-primary hover:text-primary/80">
                                            Personalizar
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

