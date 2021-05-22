export interface User {
  id: number
  name: string
  email: string
  email_verified_at: string /* Date */
  created_at: string /* Date */ | null
  updated_at: string /* Date */ | null
  groups_of_followed?: any
  followers: number
  followed: number
  profile: Profile
  games: Array<Game>
  genres: Array<Genre>
  hosted_groups: Array<Group>
}
