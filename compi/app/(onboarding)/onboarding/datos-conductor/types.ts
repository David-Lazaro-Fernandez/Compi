export interface DriverData {
  // Datos Personales
  nombres: string
  primerApellido: string
  segundoApellido: string | null
  rfc: string | null
  homoclave: string | null
  fechaNacimiento: Date
  sexo: "Masculino" | "Femenino"
  profesion: string
  ocupacion: string
  paisNacimiento: string
  nacionalidad: string

  // Domicilio
  calle: string
  numeroExterior: string
  numeroInterior: string | null
  colonia: string
  codigoPostal: string
  delegacionMunicipio: string
  estado: string
}

