export interface GameVote {
  id: number
  created_at: string /* Date */ | null
  updated_at: string /* Date */ | null
  game: Game
  user: User
}
