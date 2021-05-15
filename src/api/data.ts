export const imgUrl = 'https://bkc.nu/wp-content/uploads/2016/07/profile-placeholder.png'

export interface Group {
  id?: number
  title: string
  avatar?: string
  location: string
  description: string
}

export interface Profile {
  name: string
  avatar: string
  location: string
  description: string
}

export const profile: Profile = {
  name: 'NAME SURNAME',
  avatar: imgUrl,
  location: 'Earth',
  description: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
  assumenda nihil deleniti exercitationem placeat provident. Magni
  voluptatem aspernatur tempore ratione molestias quisquam numquam
  doloribus dolor assumenda, magnam ipsa fugiat hic.
  `,
}

export const groups: Array<Group> = [
  {
    id: 1,
    title: 'Finn',
    location: 'I\'m a big deal',
    description: 'Listen, I\'ve had a pretty messed up day...',
  },
  {
    id: 2,
    title: 'Han',
    location: 'Look, kid...',
    description: 'Listen, I\'ve had a pretty messed up day...',
  },
  {
    id: 3,
    title: 'Rey',
    location: 'I\'m a big deal',
    description: 'Listen, I\'ve had a pretty messed up day...',
  },
  {
    id: 4,
    title: 'Luke',
    location: 'I\'m a big deal',
    description: 'Listen, I\'ve had a pretty messed up day...',
  },
]

export const groupsParticipating = [
  {
    id: 5,
    title: 'Finn',
    location: 'I\'m a big deal',
    description: 'Listen, I\'ve had a pretty messed up day...',
  },
  {
    id: 6,
    title: 'Han',
    location: 'Look, kid...',
    description: 'Listen, I\'ve had a pretty messed up day...',
  },
  {
    id: 7,
    title: 'Rey',
    location: 'I\'m a big deal',
    description: 'Listen, I\'ve had a pretty messed up day...',
  },
  {
    id: 8,
    title: 'Luke',
    location: 'I\'m a big deal',
    description: 'Listen, I\'ve had a pretty messed up day...',
  },
]
