import type { Item, Lesson, Module, ModuleId } from '../types'
import { fundamentos } from './fundamentos'
import { etica } from './etica'
import { tributario } from './tributario'
import { aduanero } from './aduanero'
import { pjs } from './pjs'
import { eticaPjs } from './etica_pjs'

export const MODULES: Module[] = [
  {
    id: 'fundamentos', title: 'Estado y función pública', icon: '🏛️', color: '#3b82f6',
    desc: 'Constitución, CPACA, transparencia, MIPG y servicio al ciudadano.',
    weight: 'Base transversal',
  },
  {
    id: 'etica', title: 'Integridad y comportamentales', icon: '🛡️', color: '#8b5cf6',
    desc: 'Código de Integridad, ética del cargo, comunicación, equipo y logro.',
    weight: '25% del examen',
  },
  {
    id: 'tributario', title: 'Determinación y control tributario', icon: '🧾', color: '#f2b632',
    desc: 'Obligación tributaria, fiscalización, requerimiento, sanciones y cobro.',
    weight: 'Núcleo funcional',
  },
  {
    id: 'aduanero', title: 'Aduanero y cambiario', icon: '🚢', color: '#10b981',
    desc: 'Régimen aduanero, control, sanciones, zonas francas y régimen cambiario.',
    weight: 'Núcleo funcional',
  },
  {
    id: 'pjs', title: 'Juicio situacional', icon: '🔎', color: '#ef4444',
    desc: 'Casos del cargo Gestor II con el formato real: caso, enunciado y 3 opciones.',
    weight: 'Formato del examen',
  },
]

const LESSON_META: Record<string, { title: string; icon: string }> = {
  const: { title: 'Constitución y Estado', icon: '📜' },
  principios: { title: 'Función pública', icon: '⚖️' },
  cpaca: { title: 'CPACA y actos administrativos', icon: '📋' },
  transparencia: { title: 'Transparencia, PQRSF y archivo', icon: '🔍' },
  mipg: { title: 'MIPG y buen gobierno', icon: '🧭' },
  valores: { title: 'Código de Integridad', icon: '💎' },
  conducta: { title: 'Ética en el cargo', icon: '🤝' },
  comunicacion: { title: 'Comunicación efectiva', icon: '💬' },
  equipo: { title: 'Equipo y adaptabilidad', icon: '🧩' },
  logro: { title: 'Logro y servicio', icon: '🎯' },
  obligacion: { title: 'Obligación tributaria', icon: '📌' },
  fiscalizacion: { title: 'Facultades y actos', icon: '🔬' },
  sanciones: { title: 'Sanciones', icon: '⚡' },
  cobro: { title: 'Firmeza y cobro', icon: '🏦' },
  internacional: { title: 'Fiscalización internacional', icon: '🌎' },
  regimen: { title: 'Régimen aduanero', icon: '📦' },
  control: { title: 'Control y sanciones', icon: '🛃' },
  cambiario: { title: 'Régimen cambiario', icon: '💱' },
  precritica: { title: 'Precrítica y clasificación', icon: '🗂️' },
  pruebas: { title: 'Pruebas y debido proceso', icon: '🧪' },
  plazos: { title: 'Plazos y firmeza', icon: '⏳' },
  'etica-cargo': { title: 'Ética del cargo', icon: '🫱' },
  competencia: { title: 'Competencia y jurisdicción', icon: '🧷' },
  'integridad-pjs': { title: 'Integridad en casos', icon: '🛡️' },
  'comp-pjs': { title: 'Comportamentales en casos', icon: '🧠' },
}

export const ALL_ITEMS: Item[] = [...fundamentos, ...etica, ...eticaPjs, ...tributario, ...aduanero, ...pjs]

export const ITEM_BY_ID: Record<string, Item> = Object.fromEntries(ALL_ITEMS.map((i) => [i.id, i]))

export const LESSONS: Lesson[] = (() => {
  const out: Lesson[] = []
  const seen = new Set<string>()
  for (const item of ALL_ITEMS) {
    if (seen.has(item.lesson)) continue
    seen.add(item.lesson)
    const meta = LESSON_META[item.lesson] ?? { title: item.lesson, icon: '📘' }
    out.push({
      id: item.lesson,
      module: item.module,
      title: meta.title,
      icon: meta.icon,
      blurb: '',
      items: ALL_ITEMS.filter((i) => i.lesson === item.lesson),
    })
  }
  return out
})()

export const LESSONS_BY_MODULE: Record<ModuleId, Lesson[]> = {
  fundamentos: LESSONS.filter((l) => l.module === 'fundamentos'),
  etica: LESSONS.filter((l) => l.module === 'etica'),
  tributario: LESSONS.filter((l) => l.module === 'tributario'),
  aduanero: LESSONS.filter((l) => l.module === 'aduanero'),
  pjs: LESSONS.filter((l) => l.module === 'pjs'),
}

export const TOTAL_ITEMS = ALL_ITEMS.length
