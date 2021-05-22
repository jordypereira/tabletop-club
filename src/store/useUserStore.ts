import { defineStore } from 'pinia'
import { Token } from '~/types/token'
import { User } from '~/types/user'

function getFromLocalStorage(name: string, val = {}): any {
  const data = localStorage.getItem(name)
  return (data && JSON.parse(data)) ?? val
}

const initialState = {
  user: {} as User,
  token: getFromLocalStorage('token') as Token,
}

export const useUserStore = defineStore({
  id: 'user',
  state() {
    return initialState
  },
  getters: {
    isAuthenticated: (state) => {
      // TODO: Track when token expires
      return state.token.access_token
    },
  },
  actions: {
    setUser(value: User) {
      this.user = value
    },
    setToken(value: Token) {
      this.token = value
      localStorage.setItem('token', JSON.stringify(value))
      // TODO: Track when token expires
    },
  },
})
