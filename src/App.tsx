import { useEffect, useMemo, useRef, useState } from 'react'
import { LESSONS, LESSONS_BY_MODULE, MODULES, TOTAL_ITEMS, ITEM_BY_ID } from './data'
import type { Item, ModuleId, Profile } from './types'
import {
  accuracy,
  addXp,
  buildSimulacro,
  dayKey,
  gradeSim,
  levelOf,
  loadProfile,
  masteredCount,
  moduleProgress,
  newProfile,
  recordAnswer,
  resetProfile,
  saveProfile,
  selectItems,
  weakItems,
  type SimResult,
} from './engine'

type Screen = 'home' | 'lesson' | 'result' | 'sim' | 'simresult' | 'stats' | 'errors'

interface ViewItem {
  item: Item
  options: string[]
  correct: number
}

function makeView(item: Item): ViewItem {
  // La escala Likert no se baraja: el orden de las opciones es parte del instrumento.
  if (item.kind === 'likert') return { item, options: item.options, correct: item.correct }
  const idx = item.options.map((_, i) => i)
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[idx[i], idx[j]] = [idx[j], idx[i]]
  }
  return { item, options: idx.map((i) => item.options[i]), correct: idx.indexOf(item.correct) }
}

function shuffle<T>(a: T[]): T[] {
  const x = [...a]
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[x[i], x[j]] = [x[j], x[i]]
  }
  return x
}

let actx: AudioContext | null = null
function tone(kind: 'ok' | 'bad' | 'win') {
  try {
    actx = actx ?? new (window.AudioContext || (window as any).webkitAudioContext)()
    const now = actx.currentTime
    const seq = kind === 'ok' ? [660, 880] : kind === 'bad' ? [200, 150] : [523, 659, 784, 1047]
    seq.forEach((f, i) => {
      const o = actx!.createOscillator()
      const g = actx!.createGain()
      o.type = kind === 'bad' ? 'sawtooth' : 'sine'
      o.frequency.value = f
      g.gain.setValueAtTime(0.0001, now + i * 0.09)
      g.gain.exponentialRampToValueAtTime(0.14, now + i * 0.09 + 0.02)
      g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.09 + 0.16)
      o.connect(g).connect(actx!.destination)
      o.start(now + i * 0.09)
      o.stop(now + i * 0.09 + 0.2)
    })
  } catch {
    /* audio no disponible */
  }
}

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        dur: 1.6 + Math.random() * 1.4,
        color: ['#f2b632', '#10b981', '#3b82f6', '#ef4444', '#8b5cf6'][i % 5],
        rot: Math.random() * 360,
      })),
    [],
  )
  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            transform: `rotate(${p.rot}deg)`,
          }}
        />
      ))}
    </div>
  )
}

export default function App() {
  const [profile, setProfile] = useState<Profile | null>(() => loadProfile())
  const [screen, setScreen] = useState<Screen>('home')
  const [openModule, setOpenModule] = useState<ModuleId | null>(null)
  const [view, setView] = useState<ViewItem[]>([])
  const [idx, setIdx] = useState(0)
  const [chosen, setChosen] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [correctCount, setCorrectCount] = useState(0)
  const [lives, setLives] = useState(3)
  const [xpGain, setXpGain] = useState(0)
  const [sessionTitle, setSessionTitle] = useState('')
  const [simResult, setSimResult] = useState<SimResult | null>(null)
  const [simIdx, setSimIdx] = useState(0)
  const [name, setName] = useState('')
  const [lastSession, setLastSession] = useState<{
    moduleId: ModuleId | 'repaso'
    lessonId?: string
    title: string
    count: number
  } | null>(null)

  useEffect(() => {
    if (profile) saveProfile(profile)
  }, [profile])

  if (!profile) {
    return (
      <div className="onboard">
        <div className="onboard-card">
          <div className="badge">DIAN 2676 · Gestor II · Fiscalización</div>
          <h1>
            Ruta al <span className="gold">Mérito</span>
          </h1>
          <p className="lead">
            Tu entrenador diario para el examen del <b>8 de noviembre de 2026</b>. Lecciones cortas, casos de
            juicio situacional y simulacro con la estructura real.
          </p>
          <div className="onboard-grid">
            <div><b>{TOTAL_ITEMS}</b><span>ítems</span></div>
            <div><b>{daysToExam()}</b><span>{daysToExam() === 1 ? 'día' : 'días'}</span></div>
            <div><b>70</b><span>mínimo funcional</span></div>
          </div>
          <label className="lbl" htmlFor="n">¿Cómo te llamas?</label>
          <input
            id="n"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            maxLength={30}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && name.trim()) setProfile(newProfile(name))
            }}
          />
          <button className="btn primary big" disabled={!name.trim()} onClick={() => setProfile(newProfile(name))}>
            Empezar mi ruta 🚀
          </button>
          <p className="tiny">Progreso guardado en este dispositivo. Sin cuentas, sin datos personales.</p>
        </div>
      </div>
    )
  }

  const lvl = levelOf(profile.xp)
  const today = dayKey()
  const studiedToday = profile.lastStudyDay === today

  function startLesson(moduleId: ModuleId | 'repaso', title: string, count = 8, lessonId?: string) {
    const items = selectItems(profile!, moduleId, count, lessonId)
    if (!items.length) return
    setLastSession({ moduleId, lessonId, title, count: items.length, mode: 'lesson' } as any)
    setView(items.map(makeView))
    setIdx(0)
    setChosen(null)
    setAnswers([])
    setCorrectCount(0)
    setLives(3)
    setXpGain(0)
    setSessionTitle(title)
    setScreen('lesson')
  }

  function startWeak() {
    const items = weakItems(profile!, 10)
    if (!items.length) return
    setLastSession({ title: 'Baúl de errores', count: items.length, mode: 'weak' } as any)
    setView(shuffle(items).map(makeView))
    setIdx(0)
    setChosen(null)
    setAnswers([])
    setCorrectCount(0)
    setLives(3)
    setXpGain(0)
    setSessionTitle('Baúl de errores')
    setScreen('lesson')
  }

  function repeatSession() {
    const s = lastSession as any
    if (!s) return setScreen('home')
    if (s.mode === 'weak') return startWeak()
    startLesson(s.moduleId ?? 'repaso', s.title, s.count, s.lessonId)
  }

  function answer(i: number) {
    if (chosen !== null) return
    const v = view[idx]
    if (v.item.kind === 'likert') {
      setChosen(i)
      setAnswers((a) => [...a, i])
      setProfile((p) => (p ? addXp(p, 5) : p))
      setXpGain((x) => x + 5)
      tone('ok')
      return
    }
    const ok = i === v.correct
    setChosen(i)
    setAnswers((a) => [...a, i])
    setProfile((p) => (p ? recordAnswer(p, v.item, ok) : p))
    if (ok) {
      setCorrectCount((c) => c + 1)
      setXpGain((x) => x + 10)
      tone('ok')
    } else {
      setLives((l) => l - 1)
      setXpGain((x) => x + 2)
      tone('bad')
    }
  }

  function next() {
    const isLikert = view[idx].item.kind === 'likert'
    if (!isLikert && lives <= 0 && chosen !== null && answers[answers.length - 1] !== view[idx].correct) {
      setScreen('result')
      return
    }
    if (idx + 1 >= view.length) {
      setScreen('result')
      tone('win')
      return
    }
    setIdx(idx + 1)
    setChosen(null)
  }

  function startSim() {
    const items = shuffle(buildSimulacro(profile!)).map(makeView)
    if (!items.length) return
    setView(items)
    setIdx(0)
    setSimIdx(0)
    setChosen(null)
    setAnswers(Array(items.length).fill(-1))
    setScreen('sim')
    setSimResult(null)
  }

  function finishSim(finalAnswers: number[]) {
    const res = gradeSim(
      view.map((v) => v.item),
      finalAnswers,
    )
    setSimResult(res)
    setProfile((p) => {
      if (!p) return p
      // El simulacro también alimenta la repetición espaciada (sin duplicar XP).
      let next = p
      view.forEach((v, i) => {
        if (v.item.kind === 'likert') return
        next = recordAnswer(next, v.item, finalAnswers[i] === v.correct, false)
      })
      next = addXp(next, 50)
      return { ...next, bestSim: Math.max(next.bestSim, res.score), simCount: next.simCount + 1 }
    })
    setScreen('simresult')
    tone('win')
  }

  if (screen === 'lesson') {
    const v = view[idx]
    const ok = chosen !== null && chosen === v.correct
    return (
      <div className="app">
        <header className="topbar">
          <button className="icon-btn" onClick={() => setScreen('home')} aria-label="Salir">✕</button>
          <div className="progress" aria-label={`Pregunta ${idx + 1} de ${view.length}`}>
            <span style={{ width: `${((idx + (chosen !== null ? 1 : 0)) / view.length) * 100}%` }} />
          </div>
          <div className="lives">{'❤️'.repeat(Math.max(0, lives))}{'🖤'.repeat(Math.max(0, 3 - lives))}</div>
        </header>

        <main key={v.item.id} className={`qwrap ${chosen !== null ? (ok ? 'entered-ok' : 'entered-bad') : ''}`}>
          <div className="chips">
            <span className="chip">{sessionTitle}</span>
            <span className="chip ghost">{v.item.source}</span>
          </div>

          {v.item.case && (
            <div className="casebox">
              <span className="caselbl">📌 CASO</span>
              <p>{v.item.case}</p>
            </div>
          )}
          <h2 className="prompt">{v.item.prompt}</h2>

          <div className="opts">
            {v.options.map((o, i) => {
              let cls = 'opt'
              if (chosen !== null) {
                if (i === v.correct) cls += ' correct'
                else if (i === chosen) cls += ' wrong'
                else cls += ' dim'
              }
              return (
                <button key={i} className={cls} onClick={() => answer(i)} disabled={chosen !== null}>
                  <span className="letter">{String.fromCharCode(65 + i)}</span>
                  <span>{o}</span>
                </button>
              )
            })}
          </div>

          {chosen !== null &&
            (v.item.kind === 'likert' ? (
              <div className="feedback neutral">
                <div className="fb-head">🧭 Autoinforme registrado</div>
                <p>{v.item.explain}</p>
                <div className="note">
                  En la prueba real estas afirmaciones <b>no tienen respuesta correcta</b>: se responde con
                  honestidad y hay dos subescalas de control que detectan respuestas exageradamente favorables.
                </div>
                <div className="src">📚 Referencia: {v.item.source}</div>
                <button className="btn primary" onClick={next}>
                  {idx + 1 >= view.length ? 'Terminar sesión' : 'Continuar ▶'}
                </button>
              </div>
            ) : (
              <div className={`feedback ${ok ? 'ok' : 'bad'}`}>
                <div className="fb-head">{ok ? '✅ ¡Correcto!' : '❌ Casi. Mira por qué:'}</div>
                <p>{v.item.explain}</p>
                <div className="src">📚 Fuente: {v.item.source}</div>
                <button className="btn primary" onClick={next}>
                  {lives <= 0 && !ok ? 'Ver resultado' : idx + 1 >= view.length ? 'Terminar sesión' : 'Continuar ▶'}
                </button>
              </div>
            ))}
        </main>
      </div>
    )
  }

  if (screen === 'result') {
    const graded = view
      .slice(0, answers.length)
      .map((v, i) => ({ v, a: answers[i] }))
      .filter((x) => x.v.item.kind !== 'likert')
    const total = graded.length
    const hits = graded.filter((x) => x.a === x.v.correct).length
    const pct = total ? Math.round((hits / total) * 100) : 0
    const done = total > 0 && hits === total && lives > 0
    return (
      <div className="app center">
        {done && <Confetti />}
        <div className={`result-card ${done ? 'win' : ''}`}>
          <div className="bigicon">{done ? '🏆' : lives <= 0 ? '💔' : '🎯'}</div>
          <h2>{done ? '¡Sesión perfecta!' : lives <= 0 ? 'Te quedaste sin vidas' : 'Sesión completada'}</h2>
          <div className="result-grid">
            <div><b>{hits}/{total}</b><span>aciertos</span></div>
            <div><b>{pct}%</b><span>precisión</span></div>
            <div><b>+{xpGain}</b><span>XP</span></div>
          </div>
          <p className="lead">
            {pct >= 80
              ? 'Vas muy bien. Mantén el ritmo: la constancia pesa más que una sesión larga.'
              : pct >= 60
                ? 'Vas por buen camino. Repite esta lección mañana: la repetición espaciada hace el trabajo.'
                : 'No pasa nada. Lo importante es entender el porqué de cada respuesta; vuelve al baúl de errores.'}
          </p>
          <button className="btn primary big" onClick={() => setScreen('home')}>Volver al mapa 🗺️</button>
          <button
            className="btn ghost-btn"
            onClick={repeatSession}
          >
            🔁 Repetir sesión
          </button>
        </div>
      </div>
    )
  }

  if (screen === 'sim') {
    const v = view[idx]
    const chosenNow = answers[idx]
    return (
      <div className="app">
        <header className="topbar">
          <button className="icon-btn" onClick={() => setScreen('home')} aria-label="Salir">✕</button>
          <div className="progress"><span style={{ width: `${((idx + 1) / view.length) * 100}%` }} /></div>
          <div className="simcount">{idx + 1}/{view.length}</div>
        </header>
        <main className="qwrap">
          <div className="chips">
            <span className="chip">🏁 Simulacro</span>
            <span className="chip ghost">Sin retroalimentación hasta el final</span>
          </div>
          {v.item.case && (
            <div className="casebox">
              <span className="caselbl">📌 CASO</span>
              <p>{v.item.case}</p>
            </div>
          )}
          <h2 className="prompt">{v.item.prompt}</h2>
          <div className="opts">
            {v.options.map((o, i) => (
              <button
                key={i}
                className={`opt ${chosenNow === i ? 'selected' : ''}`}
                onClick={() => {
                  const a = [...answers]
                  a[idx] = i
                  setAnswers(a)
                }}
              >
                <span className="letter">{String.fromCharCode(65 + i)}</span>
                <span>{o}</span>
              </button>
            ))}
          </div>
          <div className="simnav">
            <button className="btn ghost-btn" disabled={idx === 0} onClick={() => setIdx(idx - 1)}>◀ Anterior</button>
            {idx + 1 < view.length ? (
              <button className="btn primary" onClick={() => setIdx(idx + 1)}>Siguiente ▶</button>
            ) : (
              <button
                className="btn primary"
                onClick={() => {
                  if (answers.some((a) => a < 0) && !confirm('Quedan preguntas sin responder. ¿Entregar igual?')) return
                  finishSim(answers)
                }}
              >
                Entregar ✅
              </button>
            )}
          </div>
        </main>
      </div>
    )
  }

  if (screen === 'simresult' && simResult) {
    const r = simResult
    return (
      <div className="app center">
        {r.funcPass && <Confetti />}
        <div className="result-card">
          <div className="bigicon">{r.funcPass ? '🏅' : '📉'}</div>
          <h2>{r.funcPass ? '¡Superaste el mínimo funcional!' : 'Aún no llegas al 70 funcional'}</h2>
          <div className="score-hero">
            <b>{Math.round(r.score)}</b>
            <span>/ 100</span>
          </div>
          <div className="bars">
            <Bar label="Funcionales" weight={65} ok={r.funcOk} total={r.funcTotal} color="#f2b632" />
            <Bar label="Comportamentales" weight={15} ok={r.compOk} total={r.compTotal} color="#8b5cf6" />
            <Bar label="Integridad" weight={10} ok={r.intOk} total={r.intTotal} color="#10b981" />
          </div>
          <p className="lead">
            La prueba funcional es eliminatoria: necesitas <b>70/100</b>. En este simulacro acertaste{' '}
            <b>{Math.round((r.funcOk / Math.max(1, r.funcTotal)) * 100)}%</b>. Revisa abajo cada respuesta y vuelve a
            intentarlo con los ítems que fallaste.
          </p>
          <details className="review">
            <summary>Ver revisión de las {r.answers.length} preguntas</summary>
            {r.answers.map((a, i) => (
              <div key={i} className={`revitem ${a.ok ? 'ok' : 'bad'}`}>
                <div className="revq">{i + 1}. {a.item.prompt}</div>
                <div className="reva">Tu respuesta: {a.chosen >= 0 ? a.item.options[a.chosen] : '—'}</div>
                {!a.ok && <div className="revok">Correcta: {a.item.options[a.item.correct]}</div>}
                <div className="reve">{a.item.explain}</div>
              </div>
            ))}
          </details>
          <button className="btn primary big" onClick={() => setScreen('home')}>Volver al mapa 🗺️</button>
        </div>
      </div>
    )
  }

  if (screen === 'stats') {
    return (
      <div className="app">
        <header className="topbar simple">
          <button className="icon-btn" onClick={() => setScreen('home')} aria-label="Volver">←</button>
          <h2>Tu progreso</h2>
        </header>
        <main className="pane">
          <div className="statgrid">
            <div className="statcard"><b>{profile.xp}</b><span>XP total</span></div>
            <div className="statcard"><b>{accuracy(profile)}%</b><span>precisión histórica</span></div>
            <div className="statcard"><b>{masteredCount(profile)}/{TOTAL_ITEMS}</b><span>ítems dominados</span></div>
            <div className="statcard"><b>{profile.streak} 🔥</b><span>racha</span></div>
          </div>
          <h3>Avance por módulo</h3>
          {MODULES.map((m) => (
            <div key={m.id} className="modrow">
              <span className="modicon">{m.icon}</span>
              <div className="modmeta">
                <b>{m.title}</b>
                <div className="minibar"><span style={{ width: `${moduleProgress(profile, m.id)}%`, background: m.color }} /></div>
              </div>
              <b className="pct">{moduleProgress(profile, m.id)}%</b>
            </div>
          ))}
          <h3>Últimos días de estudio</h3>
          <div className="days">
            {Array.from({ length: 14 }, (_, k) => {
              const d = new Date(Date.now() - (13 - k) * 86400000)
              const key = dayKey(d)
              const on = profile.daysStudied.includes(key)
              return <span key={key} className={on ? 'day on' : 'day'} title={key}>{new Intl.DateTimeFormat('es-CO', { day: 'numeric', timeZone: 'America/Bogota' }).format(d)}</span>
            })}
          </div>
          <div className="danger">
            <button
              className="btn ghost-btn"
              onClick={() => {
                if (confirm('¿Borrar todo el progreso de este dispositivo?')) {
                  resetProfile()
                  setProfile(null)
                  setScreen('home')
                }
              }}
            >
              Reiniciar progreso
            </button>
          </div>
        </main>
      </div>
    )
  }

  if (screen === 'errors') {
    const weak = weakItems(profile, 30)
    return (
      <div className="app">
        <header className="topbar simple">
          <button className="icon-btn" onClick={() => setScreen('home')} aria-label="Volver">←</button>
          <h2>Baúl de errores</h2>
        </header>
        <main className="pane">
          {weak.length === 0 ? (
            <div className="empty">
              <div className="bigicon">🧰</div>
              <p>Aún no hay errores registrados. Juega una lección y aquí aparecerán los ítems que debes reforzar.</p>
            </div>
          ) : (
            <>
              <p className="lead">Estos {weak.length} ítems son los que más se te resisten. Repásalos hoy.</p>
              <button className="btn primary big" onClick={startWeak}>Entrenar mis errores 🔁</button>
              {weak.map((it) => (
                <div key={it.id} className="errcard">
                  <b>{it.prompt}</b>
                  <p className="ans">✅ {it.options[it.correct]}</p>
                  <p className="why">{it.explain}</p>
                  <span className="src">{it.source}</span>
                </div>
              ))}
            </>
          )}
        </main>
      </div>
    )
  }

  // HOME
  return (
    <div className="app home">
      <header className="hero">
        <div className="herotop">
          <div>
            <div className="hello">Hola, {profile.name.split(' ')[0]} 👋</div>
            <div className="lvl">{lvl.icon} {lvl.name}</div>
          </div>
          <div className="streak"><b>{profile.streak}</b><span>🔥</span></div>
        </div>
        <div className="xpbar">
          <span style={{ width: `${lvl.pct}%` }} />
        </div>
        <div className="xplbl">
          {lvl.next ? `${lvl.next.min - profile.xp} XP para ${lvl.next.name}` : 'Nivel máximo'}
        </div>
        <div className="countdown">
          <span>⏳ Faltan</span>
          <b>{daysToExam()} {daysToExam() === 1 ? 'día' : 'días'}</b>
          <span>para el examen · 8 nov</span>
        </div>
      </header>

      <main className="pane">
        <button className="daily" onClick={() => startLesson('repaso', 'Repaso del día', 10)}>
          <div>
            <b>{studiedToday ? 'Repaso extra' : 'Repaso del día'} 🎯</b>
            <span>Mezcla inteligente: vencidos, nuevos y débiles</span>
          </div>
          <span className="chev">▶</span>
        </button>

        <div className="quickrow">
          <button className="quick" onClick={startSim}>
            <b>🏁</b><span>Simulacro</span>
          </button>
          <button className="quick" onClick={() => setScreen('errors')}>
            <b>🧰</b><span>Errores</span>
          </button>
          <button className="quick" onClick={() => setScreen('stats')}>
            <b>📊</b><span>Progreso</span>
          </button>
        </div>

        <h3 className="seclbl">Tu ruta de estudio</h3>

        {MODULES.map((m) => {
          const prog = moduleProgress(profile, m.id)
          const open = openModule === m.id
          const lessons = LESSONS_BY_MODULE[m.id]
          return (
            <section key={m.id} className={`modulecard ${open ? 'open' : ''}`} style={{ ['--mc' as any]: m.color }}>
              <button className="modhead" onClick={() => setOpenModule(open ? null : m.id)}>
                <span className="modicon big">{m.icon}</span>
                <div className="modinfo">
                  <b>{m.title}</b>
                  <span>{m.desc}</span>
                  <div className="minibar"><span style={{ width: `${prog}%`, background: m.color }} /></div>
                </div>
                <div className="modright">
                  <b>{prog}%</b>
                  <span className="chev">{open ? '▾' : '▸'}</span>
                </div>
              </button>
              {open && (
                <div className="lessons">
                  {lessons.map((l) => {
                    const done = l.items.filter((i) => (profile.stats[i.id]?.box ?? 0) >= 2).length
                    return (
                      <button
                        key={l.id}
                        className="lessonrow"
                        onClick={() => startLesson(m.id, l.title, Math.min(10, Math.max(6, l.items.length)), l.id)}
                      >
                        <span className="licon">{l.icon}</span>
                        <span className="ltext">
                          <b>{l.title}</b>
                          <span>{done}/{l.items.length} dominados</span>
                        </span>
                        <span className="play">▶</span>
                      </button>
                    )
                  })}
                  <button className="lessonrow all" onClick={() => startLesson(m.id, m.title, 10)}>
                    <span className="licon">🎲</span>
                    <span className="ltext"><b>Mezcla del módulo</b><span>10 preguntas de todas las lecciones</span></span>
                    <span className="play">▶</span>
                  </button>
                </div>
              )}
            </section>
          )
        })}

        <div className="footnote">
          <b>Sobre el examen real:</b> 8 de noviembre de 2026 · 8:00 a. m. · 5 horas · Competencias Funcionales
          eliminatorias con mínimo 70/100 · Comportamentales e Integridad tipo Likert con subescalas de control.
          <br />
          <span className="tiny">Contenido de práctica original, basado en normas oficiales vigentes al 19 de junio de 2026. No reproduce ítems reservados del examen.</span>
        </div>
      </main>
    </div>
  )
}

function Bar({ label, weight, ok, total, color }: { label: string; weight: number; ok: number; total: number; color: string }) {
  const pct = total ? Math.round((ok / total) * 100) : 0
  return (
    <div className="barrow">
      <div className="barlbl">
        <span>{label} <em className="w">· peso {weight}%</em></span>
        <b>{ok}/{total} aciertos · {pct}%</b>
      </div>
      <div className="minibar tall"><span style={{ width: `${pct}%`, background: color }} /></div>
    </div>
  )
}

function daysToExam(): number {
  const exam = new Date('2026-11-08T08:00:00-05:00').getTime()
  return Math.max(0, Math.ceil((exam - Date.now()) / 86400000))
}
