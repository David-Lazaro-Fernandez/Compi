export interface InsuranceData {
  tipoSeguro: string
  tipoAuto: string
  año: number
  modeloVehiculo: string
  formaPago: string
  deducibleDaños: number
  deducibleRobo: number
  promocionMSI: string | null
  precioAnual: number
}

export type FormErrors = Partial<Record<keyof InsuranceData, string>>

