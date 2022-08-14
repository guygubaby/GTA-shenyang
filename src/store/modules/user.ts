import { defineStore } from 'pinia'

interface IUserState {
  name: string
}

export const useUserStore = defineStore('user', {
  persist: {
    enabled: true,
    strategies: [
      {
        storage: window.sessionStorage,
      },
    ],
  },
  state: (): IUserState => ({
    name: '',
  }),
  actions: {
    setName(name: string) {
      this.name = name
    },
  },
  getters: {
    newName(): string {
      return this.name.toUpperCase()
    },
  },
})
