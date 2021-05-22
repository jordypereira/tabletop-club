export interface GenreVote {
  id: number
  created_at: string /* Date */ | null
  updated_at: string /* Date */ | null
  mechanic: Mechanic
  user: User
}
