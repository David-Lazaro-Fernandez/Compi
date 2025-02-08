"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"

const formSchema = z.object({
  vin: z.string().min(17, "El VIN debe tener 17 caracteres").max(17),
  placas: z.string().nullable(),
  numeroMotor: z.string().nullable(),
  confirmaciones: z
    .object({
      usoParticular: z.boolean(),
      noLegalizado: z.boolean(),
      sinSiniestros: z.boolean(),
      noSalvamento: z.boolean(),
    })
    .refine(
      (data) => {
        return Object.values(data).every((value) => value === true)
      },
      {
        message: "Debes confirmar todas las declaraciones para continuar",
        path: ["usoParticular"], // This will show the error on the first checkbox
      },
    ),
})

type FormValues = z.infer<typeof formSchema>

export default function VehicleForm() {
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vin: "",
      placas: null,
      numeroMotor: null,
      confirmaciones: {
        usoParticular: false,
        noLegalizado: false,
        sinSiniestros: false,
        noSalvamento: false,
      },
    },
  })

  function onSubmit(data: FormValues) {
    console.log(data)
    router.push("/onboarding/coverage")
  }

  return (
    <div className="mx-auto max-w-2xl px-4">
      <Card>
        <CardHeader>
          <CardTitle>Datos del Vehículo</CardTitle>
          <CardDescription>Por favor, ingresa los datos de identificación de tu vehículo</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Datos de Identificación */}
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="vin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de Serie (VIN)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="1HGCM82633A123456" maxLength={17} className="uppercase" />
                      </FormControl>
                      <FormDescription>
                        El número VIN se encuentra en la tarjeta de circulación y consta de 17 caracteres
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="placas"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Placas (Opcional)</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} placeholder="ABC123" className="uppercase" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="numeroMotor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de Motor (Opcional)</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value || ""} placeholder="NMO1234567890" className="uppercase" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Confirmaciones */}
              <div className="space-y-6">
                <h3 className="font-medium text-lg">Confirmación del Estado del Vehículo</h3>

                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="confirmaciones.usoParticular"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Confirmo que el vehículo es de uso particular</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmaciones.noLegalizado"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Confirmo que el vehículo no es legalizado, fronterizo o remarcado</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmaciones.sinSiniestros"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Confirmo que el vehículo no tiene siniestros por reclamar</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmaciones.noSalvamento"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Confirmo que el vehículo no es de salvamento</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Link href="/onboarding/datos-conductor">
                <Button type="submit" className="w-full mt-10">
                  Continuar
                </Button>
              </Link>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

