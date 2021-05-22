import axios from 'axios'
import { useUserStore } from '~/store/useUserStore'
import { Game } from '~/types/game'
import { Resource } from '~/types/Resource'
import { Token } from '~/types/token'

const userStore = useUserStore()
const baseUrl = 'https://robbevaes.be/tabletop-club/'

export const instance = axios.create({
  baseURL: `${baseUrl}api/`,
  timeout: 1000,
  headers: { AUTHORIZATION: `Bearer ${userStore.token.access_token}` },
})

const loginUrl = `${baseUrl}oauth/token`
const loginBody = {
  grant_type: 'password',
  client_id: '4',
  client_secret: 'mnA6vZalHded5nLnZTgYgdbDmF1dJTuRtZSzObY4',
}

export async function postLogin({ username, password }: { username: string; password: string }) {
  try {
    const resp = await instance.post<Token>(loginUrl, {
      username,
      password,
      ...loginBody,
    })

    userStore.setToken(resp.data)
  }
  catch (error) {
    throw new Error(error)
  }
}

export async function searchGames(searchTerm: string) {
  try {
    const resp = await instance.get<Resource<Game>>('games?order_by=rank', {
      params: {
        q: searchTerm,
      },
    })

    return resp.data.data
  }
  catch (error) {
    throw new Error(error)
  }
}
