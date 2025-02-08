export interface VehicleData {
  vin: string
  placas: string | null
  numeroMotor: string | null
  confirmaciones: {
    usoParticular: boolean
    noLegalizado: boolean
    sinSiniestros: boolean
    noSalvamento: boolean
  }
}

