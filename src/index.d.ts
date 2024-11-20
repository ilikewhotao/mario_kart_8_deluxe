export type User = {
  sw: string
  username: string
  nickname: string
  showname: string
}

export type Record = {
  datetime: string
  data: { sw: string; score: number; bonus: number }[]
}

export type filterRecord = Record & {
  sw: string
  rank: number
  score: number
  bonus: number
}
