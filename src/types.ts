export type ModuleId = 'fundamentos' | 'etica' | 'tributario' | 'aduanero' | 'pjs'

export type ItemKind = 'pjs' | 'mcq' | 'likert'

export interface Item {
  id: string
  module: ModuleId
  lesson: string
  kind: ItemKind
  case?: string
  prompt: string
  options: string[]
  correct: number
  explain: string
  source: string
}

export interface Lesson {
  id: string
  module: ModuleId
  title: string
  icon: string
  blurb: string
  items: Item[]
}

export interface Module {
  id: ModuleId
  title: string
  icon: string
  color: string
  desc: string
  weight: string
}

export interface ItemStat {
  seen: number
  ok: number
  ko: number
  box: number
  due: number
  last: number
}

export interface Profile {
  name: string
  xp: number
  streak: number
  lastStudyDay: string
  daysStudied: string[]
  stats: Record<string, ItemStat>
  bestSim: number
  simCount: number
  createdAt: number
}
