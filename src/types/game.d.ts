export interface Game {
  id: number
  created_at: string /* Date */ | null
  updated_at: string /* Date */ | null
  title: string
  image: string | null
  public: boolean
  year_published: number | null
  min_players: number | null
  max_players: number | null
  min_play_time: number | null
  max_play_time: number | null
  min_age: number | null
  thumbnail: string | null
  description: string | null
  rank: number | null
  average: number | null
  users_rated: number | null
  bayes_average: number | null
  genres: Array<Genre>
  mechanics: Array<Mechanics>
}
