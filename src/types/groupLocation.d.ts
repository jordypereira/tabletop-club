export interface GroupLocation {
  id?: number
  created_at: string /* Date */ | null
  updated_at: string /* Date */ | null
  title: string
  country: string | null
  street: string | null
  street_nr: string | null
  city: string | null
  postcode: string | null
  region: string | null
  latitude: string | null
  longitude: string | null
  public: boolean
}
