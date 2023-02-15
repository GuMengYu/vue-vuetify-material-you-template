interface Profile extends User {
  userName: string
  userType: number
  signature: string
}
export interface Account {
  profile: Profile
  account?: {
    vipType: string
    id: number
    userName: string
  }
  token?: string
}

export interface User {
  avatarUrl: string
  nickname: string
  userId: string
  vipType: number
}
