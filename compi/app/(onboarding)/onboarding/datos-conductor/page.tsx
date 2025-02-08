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
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon} from "lucide-react"
import Link from "next/link"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  nombres: z.string().min(1, "El nombre es requerido"),
  primerApellido: z.string().min(1, "El primer apellido es requerido"),
  segundoApellido: z.string().optional(),
  rfc: z.string().optional(),
  homoclave: z.string().optional(),
  fechaNacimiento: z.date({
    required_error: "La fecha de nacimiento es requerida",
  }),
  sexo: z.enum(["Masculino", "Femenino"], {
    required_error: "Selecciona el sexo",
  }),
  profesion: z.string().min(1, "La profesión es requerida"),
  ocupacion: z.string().min(1, "La ocupación es requerida"),
  paisNacimiento: z.string().min(1, "El país de nacimiento es requerido"),
  nacionalidad: z.string().min(1, "La nacionalidad es requerida"),
  calle: z.string().min(1, "La calle es requerida"),
  numeroExterior: z.string().min(1, "El número exterior es requerido"),
  numeroInterior: z.string().optional(),
  colonia: z.string().min(1, "La colonia es requerida"),
  codigoPostal: z.string().length(5, "El código postal debe tener 5 dígitos"),
  delegacionMunicipio: z.string().min(1, "La delegación o municipio es requerido"),
  estado: z.string().min(1, "El estado es requerido"),
})

type FormValues = z.infer<typeof formSchema>

export default function DriverForm() {
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombres: "David",
      primerApellido: "González",
      segundoApellido: "Martínez",
      rfc: "GOMD900413HMCNLR",
      homoclave: "01",
      fechaNacimiento: new Date(),
      sexo: undefined,
      profesion: "Empleado de Oficina",
      ocupacion: "Empleado de Oficina",
      paisNacimiento: "México",
      nacionalidad: "Mexicano",
      calle: "Avenida Reforma",
      numeroExterior: "123",
      numeroInterior: "A-2",
      colonia: "Doctores",
      codigoPostal: "06720",
      delegacionMunicipio: "Cuauhtémoc",
      estado: "Ciudad de México",
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
          <CardTitle>Datos del Conductor</CardTitle>
          <CardDescription>Por favor, ingresa los datos del conductor principal</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Datos Personales */}
              <div className="space-y-6">
                <h3 className="font-medium text-lg">Datos Personales</h3>

                <FormField
                  control={form.control}
                  name="nombres"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre(s)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="David" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="primerApellido"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primer Apellido</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="González" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="segundoApellido"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Segundo Apellido (Opcional)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Martínez" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="rfc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>RFC (Opcional)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="GOMD900413HMCNLR" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="homoclave"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Homoclave (Opcional)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="01" maxLength={2} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fechaNacimiento"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Fecha de Nacimiento</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground",
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP", { locale: es })
                                ) : (
                                  <span>Selecciona una fecha</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sexo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sexo</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona el sexo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Masculino">Masculino</SelectItem>
                            <SelectItem value="Femenino">Femenino</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="profesion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Profesión</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Empleado de Oficina" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ocupacion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ocupación</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Empleado de Oficina" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="paisNacimiento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>País de Nacimiento</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="México" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="nacionalidad"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nacionalidad</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Mexicano" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Domicilio */}
              <div className="space-y-6">
                <h3 className="font-medium text-lg">Domicilio del Conductor</h3>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="calle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Calle</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Avenida Reforma" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="numeroExterior"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número Exterior</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="123" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="numeroInterior"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número Interior</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="A-2" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="colonia"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Colonia</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Doctores" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="codigoPostal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Código Postal</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="06720" maxLength={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="delegacionMunicipio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Delegación o Municipio</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Cuauhtémoc" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="estado"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estado</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Ciudad de México" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Link href="/onboarding/product-selection">
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

