export interface Profile {
  id: number
  created_at: string /* Date */ | null
  updated_at: string /* Date */ | null
  bio: string | null
  picture: string | null
  user_id: number
}
