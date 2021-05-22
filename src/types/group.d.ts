export interface Group {
  id?: number
  created_at?: string /* Date */ | null
  updated_at?: string /* Date */ | null
  title: string
  image?: string | null
  information: string | null
  private_information?: string | null
  votes_locked?: boolean
  online: boolean
  start_time?: number /* Date */
  games_with_votes?: any
  host?: User
  players?: Array<User>
  applicants?: Array<User>
  rejected?: Array<User>
  games?: Array<Game>
  location: GroupLocation
}
