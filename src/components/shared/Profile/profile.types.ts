export interface Address {
  id: string
  cityStreetHouse: string
  entrance?: number | string
  code?: number | string
  floor?: number | string
  apartment?: number | string
  comment?: string | string
  phone: number | string
}

export interface MappedAddress {
  id: string
  label: string
  phone: number | string
}
