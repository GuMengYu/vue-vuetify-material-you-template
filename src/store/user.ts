// Utilities
import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

import type { Account } from '@/types'

type Nullable<T> = T | null
export interface UserState {
  account: Nullable<Account>
}
export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return useLocalStorage('user', {
      account: null,
    } as UserState)
  },
  getters: {},
  actions: {
    async fetch() {},
  },
})
