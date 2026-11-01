import type { Item, Lesson, Module, ModuleId } from '../types'
import { fundamentos } from './fundamentos'
import { etica } from './etica'
import { tributario } from './tributario'
import { aduanero } from './aduanero'
import { pjs } from './pjs'
import { eticaPjs } from './etica_pjs'
import { indicadoresA } from './indicadores_a'
import { indicadoresB } from './indicadores_b'

export const MODULES: Module[] = [
  {
    id: 'fundamentos', title: 'Institucional, archivo y auditoría', icon: '🏛️', color: '#3b82f6',
    desc: 'Indicadores 1, 2, 6 y 7: estructura de la DIAN, misionalidad, gestión documental y técnicas de auditoría.',
    weight: 'Indicadores oficiales',
  },
  {
    id: 'etica', title: 'Comportamentales', icon: '🛡️', color: '#8b5cf6',
    desc: 'Los 11 comportamentales del empleo 236765: adaptabilidad, ética, comunicación, logro, usuario, equipo, compromiso, diligencia, honestidad, justicia y respeto.',
    weight: 'Prueba comportamental',
  },
  {
    id: 'tributario', title: 'Tributario: obligación, liquidación y fiscalización', icon: '🧾', color: '#f2b632',
    desc: 'Indicadores 5, 9, 10 y 3: obligaciones formales y sustanciales, liquidación, fiscalización y sanciones.',
    weight: 'Núcleo funcional',
  },
  {
    id: 'aduanero', title: 'Aduanero, cambiario y LA/FT', icon: '🚢', color: '#10b981',
    desc: 'Indicadores 8 y 4: normativa cambiaria, lavado de activos, financiación del terrorismo, ROS y denuncias.',
    weight: 'Núcleo funcional',
  },
  {
    id: 'pjs', title: 'Razonamiento y casos integradores', icon: '🔎', color: '#ef4444',
    desc: 'Razonamiento analítico y cruces de tributario, aduanero, cambiario y ética en el formato del cargo.',
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
  'org-dian': { title: 'Estructura de la DIAN', icon: '🏢' },
  'mision-dian': { title: 'Misionalidad', icon: '🎯' },
  'gestion-doc': { title: 'Gestión documental', icon: '🗂️' },
  'auditoria': { title: 'Normas de auditoría', icon: '📊' },
  'oblig-formales': { title: 'Obligaciones formales', icon: '📝' },
  'liquidacion': { title: 'Liquidación de impuestos', icon: '🧮' },
  'fiscalizacion-proc': { title: 'Fiscalización y liquidación', icon: '🔬' },
  'sanciones-ind': { title: 'Imposición de sanciones', icon: '⚖️' },
  'laft': { title: 'LA/FT y ROS', icon: '🕵️' },
  'cambiario-ind': { title: 'Normativa cambiaria', icon: '💱' },
  'comp-n1': { title: 'Comportamentales N1', icon: '🧠' },
  'comp-valores': { title: 'Valores del servicio', icon: '💎' },
  'razonamiento': { title: 'Razonamiento analítico', icon: '🧩' },
  'casos-integradores': { title: 'Casos integradores', icon: '🔎' },
}

export const ALL_ITEMS: Item[] = [...fundamentos, ...etica, ...eticaPjs, ...tributario, ...aduanero, ...pjs, ...indicadoresA, ...indicadoresB]

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
