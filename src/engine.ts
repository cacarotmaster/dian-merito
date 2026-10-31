import { ALL_ITEMS, ITEM_BY_ID } from './data'
import type { Item, ItemStat, Profile, ModuleId } from './types'

const KEY = 'dian2676_profile_v1'

export function dayKey(d = new Date()): string {
  return d.toLocaleDateString('en-CA', { timeZone: 'America/Bogota' })
}

function yesterdayKey(): string {
  return dayKey(new Date(Date.now() - 86400000))
}

/** Inicio del día en Bogotá (UTC-5, sin horario de verano). */
function startOfDayBogota(ts = Date.now()): number {
  const d = new Date(ts)
  const bogota = new Date(d.getTime() - 5 * 3600000)
  const y = bogota.getUTCFullYear()
  const m = bogota.getUTCMonth()
  const day = bogota.getUTCDate()
  return Date.UTC(y, m, day, 5, 0, 0) // 00:00 Bogotá = 05:00 UTC
}

export function newProfile(name: string): Profile {
  return {
    name: (name || '').trim() || 'Aspirante',
    xp: 0,
    streak: 0,
    lastStudyDay: '',
    daysStudied: [],
    stats: {},
    bestSim: 0,
    simCount: 0,
    createdAt: Date.now(),
  }
}

function sanitizeStat(raw: any): ItemStat {
  return {
    seen: Number(raw?.seen) || 0,
    ok: Number(raw?.ok) || 0,
    ko: Number(raw?.ko) || 0,
    box: Math.max(0, Math.min(5, Number(raw?.box) || 0)),
    due: Number(raw?.due) || 0,
    last: Number(raw?.last) || 0,
  }
}

export function loadProfile(): Profile | null {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    const base = newProfile(typeof parsed.name === 'string' ? parsed.name : 'Aspirante')
    const stats: Record<string, ItemStat> = {}
    if (parsed.stats && typeof parsed.stats === 'object') {
      for (const [id, s] of Object.entries(parsed.stats)) stats[id] = sanitizeStat(s)
    }
    return {
      ...base,
      xp: Number(parsed.xp) || 0,
      streak: Number(parsed.streak) || 0,
      lastStudyDay: typeof parsed.lastStudyDay === 'string' ? parsed.lastStudyDay : '',
      daysStudied: Array.isArray(parsed.daysStudied) ? parsed.daysStudied.filter((x: any) => typeof x === 'string') : [],
      stats,
      bestSim: Number(parsed.bestSim) || 0,
      simCount: Number(parsed.simCount) || 0,
      createdAt: Number(parsed.createdAt) || Date.now(),
    }
  } catch {
    return null
  }
}

export function saveProfile(p: Profile) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p))
  } catch {
    /* storage lleno o bloqueado */
  }
}

export function resetProfile() {
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* noop */
  }
}

export function defaultStat(): ItemStat {
  return { seen: 0, ok: 0, ko: 0, box: 0, due: 0, last: 0 }
}

const INTERVALS = [0, 1, 3, 7, 14, 30]

function touchDay(p: Profile, next: Profile): Profile {
  const today = dayKey()
  if (next.lastStudyDay !== today) {
    next.streak = next.lastStudyDay === yesterdayKey() ? p.streak + 1 : 1
    next.lastStudyDay = today
    next.daysStudied = Array.from(new Set([...p.daysStudied, today])).slice(-400)
  }
  return next
}

export function recordAnswer(p: Profile, item: Item, ok: boolean, giveXp = true): Profile {
  const stat = { ...(p.stats[item.id] ?? defaultStat()) }
  stat.seen += 1
  stat.last = Date.now()
  if (ok) {
    stat.ok += 1
    stat.box = Math.min(5, stat.box + 1)
  } else {
    stat.ko += 1
    stat.box = 0
  }
  const days = INTERVALS[stat.box]
  stat.due = days === 0 ? Date.now() : startOfDayBogota() + days * 86400000

  const next: Profile = {
    ...p,
    xp: p.xp + (giveXp ? (ok ? 10 : 2) : 0),
    stats: { ...p.stats, [item.id]: stat },
  }
  return touchDay(p, next)
}

export function addXp(p: Profile, n: number): Profile {
  return touchDay(p, { ...p, xp: p.xp + n })
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function selectItems(
  p: Profile,
  moduleId: ModuleId | 'repaso',
  count: number,
  lessonId?: string,
): Item[] {
  let pool = moduleId === 'repaso' ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.module === moduleId)
  if (lessonId) pool = pool.filter((i) => i.lesson === lessonId)
  const now = Date.now()
  const due = pool.filter((i) => {
    const s = p.stats[i.id]
    return s && s.seen > 0 && s.due <= now
  })
  const fresh = pool.filter((i) => !p.stats[i.id]?.seen)
  const weak = pool.filter((i) => {
    const s = p.stats[i.id]
    return s && s.seen > 0 && s.box < 2 && !due.includes(i)
  })
  const rest = pool.filter((i) => !due.includes(i) && !fresh.includes(i) && !weak.includes(i))
  const out = [...shuffle(due), ...shuffle(fresh), ...shuffle(weak), ...shuffle(rest)]
  return out.slice(0, Math.min(count, out.length))
}

export function masteredCount(p: Profile, moduleId?: ModuleId): number {
  const pool = moduleId ? ALL_ITEMS.filter((i) => i.module === moduleId) : ALL_ITEMS
  return pool.filter((i) => (p.stats[i.id]?.box ?? 0) >= 2).length
}

export function moduleProgress(p: Profile, moduleId: ModuleId): number {
  const pool = ALL_ITEMS.filter((i) => i.module === moduleId)
  if (!pool.length) return 0
  return Math.round((masteredCount(p, moduleId) / pool.length) * 100)
}

export function weakItems(p: Profile, limit = 20): Item[] {
  return Object.entries(p.stats)
    .filter(([, s]) => s.ko > 0 && s.box < 2)
    .sort((a, b) => b[1].ko - a[1].ko)
    .slice(0, limit)
    .map(([id]) => ITEM_BY_ID[id])
    .filter(Boolean)
}

export function accuracy(p: Profile): number {
  let ok = 0
  let total = 0
  for (const s of Object.values(p.stats)) {
    ok += s.ok
    total += s.seen
  }
  return total ? Math.round((ok / total) * 100) : 0
}

export const LEVELS = [
  { min: 0, name: 'Aspirante', icon: '🌱' },
  { min: 300, name: 'Auxiliar', icon: '📗' },
  { min: 800, name: 'Técnico', icon: '📘' },
  { min: 1500, name: 'Gestor', icon: '🎖️' },
  { min: 2500, name: 'Gestor II', icon: '🏅' },
  { min: 4000, name: 'Inspector', icon: '🛡️' },
  { min: 6000, name: 'Experto DIAN', icon: '👑' },
]

export function levelOf(xp: number) {
  let idx = 0
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].min) idx = i
  const cur = LEVELS[idx]
  const next = LEVELS[idx + 1]
  const pct = next ? Math.round(((xp - cur.min) / (next.min - cur.min)) * 100) : 100
  return { ...cur, index: idx, next, pct }
}

export interface SimResult {
  total: number
  score: number
  funcOk: number
  funcTotal: number
  funcPass: boolean
  compOk: number
  compTotal: number
  intOk: number
  intTotal: number
  answers: { item: Item; chosen: number; ok: boolean }[]
}

export function buildSimulacro(p: Profile): Item[] {
  const functional = ALL_ITEMS.filter((i) => ['tributario', 'aduanero', 'pjs'].includes(i.module))
  const fundamentos = ALL_ITEMS.filter((i) => i.module === 'fundamentos')
  const integridad = ALL_ITEMS.filter((i) => i.lesson === 'integridad-pjs')
  const comp = ALL_ITEMS.filter((i) => i.lesson === 'comp-pjs')

  const pick = (pool: Item[], n: number) => {
    const due = shuffle(pool.filter((i) => p.stats[i.id]?.seen && (p.stats[i.id]?.box ?? 0) < 2))
    const rest = shuffle(pool.filter((i) => !due.includes(i)))
    return [...due, ...rest].slice(0, Math.min(n, pool.length))
  }

  return [...pick(functional, 28), ...pick(fundamentos, 4), ...pick(comp, 4), ...pick(integridad, 4)]
}

export function gradeSim(items: Item[], answers: number[]): SimResult {
  let funcOk = 0
  let funcTotal = 0
  let compOk = 0
  let compTotal = 0
  let intOk = 0
  let intTotal = 0
  const detail = items.map((item, i) => {
    const ok = answers[i] === item.correct
    if (item.lesson.startsWith('integridad')) {
      intTotal++
      if (ok) intOk++
    } else if (item.module === 'etica') {
      compTotal++
      if (ok) compOk++
    } else {
      funcTotal++
      if (ok) funcOk++
    }
    return { item, chosen: answers[i], ok }
  })
  // Los pesos aplicables suman 90 (65 + 15 + 10); se normaliza a escala 0-100.
  const raw =
    (funcOk / Math.max(1, funcTotal)) * 65 +
    (compOk / Math.max(1, compTotal)) * 15 +
    (intOk / Math.max(1, intTotal)) * 10
  const score = Math.round((raw / 0.9) * 10) / 10
  return {
    total: funcOk + compOk + intOk,
    score,
    funcOk,
    funcTotal,
    funcPass: funcTotal > 0 && funcOk / funcTotal >= 0.7,
    compOk,
    compTotal,
    intOk,
    intTotal,
    answers: detail,
  }
}
