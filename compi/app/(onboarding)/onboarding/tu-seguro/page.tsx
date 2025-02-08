"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"

const formSchema = z.object({
  tipoSeguro: z.string().min(1, "Selecciona un tipo de seguro"),
  tipoAuto: z.string().min(1, "Selecciona un tipo de auto"),
  año: z
    .number()
    .min(1990)
    .max(new Date().getFullYear() + 1),
  modeloVehiculo: z.string().min(1, "Ingresa el modelo del vehículo"),
  formaPago: z.string().min(1, "Selecciona una forma de pago"),
  deducibleDaños: z.number().min(0).max(100),
  deducibleRobo: z.number().min(0).max(100),
  promocionMSI: z.string().nullable(),
  precioAnual: z.number().min(0),
})

type FormValues = z.infer<typeof formSchema>

export default function InsuranceForm() {
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipoSeguro: "",
      tipoAuto: "",
      año: new Date().getFullYear(),
      modeloVehiculo: "",
      formaPago: "",
      deducibleDaños: 5,
      deducibleRobo: 10,
      promocionMSI: null,
      precioAnual: 0,
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
          <CardTitle>Información del Seguro</CardTitle>
          <CardDescription>Por favor, completa los detalles de tu seguro</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="tipoSeguro"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Seguro</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo de seguro" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="anual">Seguro Anual</SelectItem>
                        <SelectItem value="semestral">Seguro Semestral</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tipoAuto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Auto</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo de auto" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="nacional">Nacional</SelectItem>
                        <SelectItem value="importado">Importado</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="año"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Año</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        min={1990}
                        max={new Date().getFullYear() + 1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="modeloVehiculo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modelo del Vehículo</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Ej: PRIUS C HIBRIDO AUT 1.5L 4CIL" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="formaPago"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Forma de Pago</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona la forma de pago" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="anual">Anual</SelectItem>
                        <SelectItem value="semestral">Semestral</SelectItem>
                        <SelectItem value="mensual">Mensual</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deducibleDaños"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deducible Daños Materiales (%)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        min={0}
                        max={100}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deducibleRobo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deducible Robo Total (%)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        min={0}
                        max={100}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="promocionMSI"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Promoción MSI</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        placeholder="Ej: 12 MSI con tarjetas de crédito Santander"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="precioAnual"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Precio Anual Total (MXN)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        min={0}
                        step="0.01"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href="/onboarding/datos-vehiculo">
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

