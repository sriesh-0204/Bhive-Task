export type SpaceList = SpaceData[]

export interface SpaceData {
  id: string
  name: string
  address: string
  latitude: number
  longitude: number
  google_maps_url?: string
  city: string
  state: string
  country: string
  postal_code: string
  description: any
  rules: any
  amenities?: string[]
  images: string[]
  working_hours_start: string
  working_hours_end: string
  contact_person_name?: string
  facilities: any
  is_active: boolean
  is_day_pass_enabled: boolean
  day_pass_price: number
  day_pass_discounts_percentage: DayPassDiscountsPercentage
  manager_id: any
  can_edit?: boolean
}

export interface DayPassDiscountsPercentage {
  "1": N1
  "10": N10
}

export interface N1 {
  value: number
  message: string
}

export interface N10 {
  value: number
  message: string
}