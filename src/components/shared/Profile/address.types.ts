export interface Address {
  cityStreetHouse: string
  entrance: number
  code: number
  floor: number
  apartment: number
  comment: string
  phone: number | string
}

export interface MappedAddress {
  label: string
  phone: number | string
}
