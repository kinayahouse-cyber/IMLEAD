import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  PROFILS,
  TYPES,
  BUDGETS,
  PHASES,
  BLOCAGES,
  calcScore,
  getLevel,
  getLevelMeta,
  getRisks,
  getReco,
  getResultCopy,
} from '../data/diagnostic.js'

const TOTAL_STEPS = 6 // profil, type, budget, phase, blocages, contact

const STEP_LABELS = [
  'Profil',
  'Nature du projet',
  'Budget',
  'Phase du projet',
  'Points de friction',
  'Contact',
]

const initialState = {
  profil: null,
  type: null,
  budgetIndex: 3,
  phase: null,
  blocages: [],
  prenom: '',
  nom: '',
  email: '',
}

export default function Diagnostic() {
  const [stepIndex, setStepIndex] = useState(0)
  const [state, setState] = useState(initialState)
  const [showResult, setShowResult] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const canAdvance = {
    0: !!state.profil,
    1: !!state.type,
    2: true,
    3: !!state.phase,
    4: true,
    5: true,
  }[stepIndex]

  const goNext = () => {
    if (stepIndex < TOTAL_STEPS - 1) {
      setStepIndex((i) => i + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      finish()
    }
  }

  const goBack = () => {
    if (stepIndex === 0) return
    setStepIndex((i) => i - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const finish = () => {
    if (state.email) {
      // Endpoint de collecte à définir — pas de dépendance backend pour le
      // score. Placeholder volontaire tant que l'endpoint n'est pas fourni.
      console.info('[diagnostic] lead capturé (endpoint à définir)', {
        prenom: state.prenom,
        nom: state.nom,
        email: state.email,
      })
    }
    setSubmitted(true)
    setShowResult(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleBlocage = (id) => {
    setState((s) => ({
      ...s,
      blocages: s.blocages.includes(id) ? s.blocages.filter((b) => b !== id) : [...s.blocages, id],
    }))
  }

  if (showResult) {
    return <Result state={state} submitted={submitted} onRestart={() => {
      setState(initialState)
      setStepIndex(0)
      setShowResult(false)
      setSubmitted(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }} />
  }

  const progressPct = ((stepIndex + 1) / TOTAL_STEPS) * 100

  return (
    <div id="page-diagnostic" style={{ background: 'var(--depth)', minHeight: '100vh' }}>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="diag-wrapper">
        <div
          className="deco-num"
          aria-hidden="true"
          style={{ opacity: 0.5 }}
        >
          {String(stepIndex + 1).padStart(2, '0')}
        </div>

        {stepIndex === 0 && (
          <Step
            num="01"
            label="Profil"
            question="Qui êtes-vous ?"
          >
            <div className="options">
              <div className="option-row">
                {PROFILS.map((p) => (
                  <Opt
                    key={p.id}
                    radio
                    selected={state.profil === p.id}
                    onClick={() => setState((s) => ({ ...s, profil: p.id }))}
                    text={p.label}
                    sub={p.sub}
                  />
                ))}
              </div>
            </div>
          </Step>
        )}

        {stepIndex === 1 && (
          <Step
            num="02"
            label="Nature du projet"
            question="Quel type de projet pilotez-vous ?"
            sub="La nature du projet conditionne la complexité de gouvernance nécessaire."
          >
            <div className="options">
              <div className="option-row">
                {TYPES.map((t) => (
                  <Opt
                    key={t.id}
                    radio
                    selected={state.type === t.id}
                    onClick={() => setState((s) => ({ ...s, type: t.id }))}
                    text={t.label}
                  />
                ))}
              </div>
            </div>
          </Step>
        )}

        {stepIndex === 2 && (
          <Step
            num="03"
            label="Budget"
            question="Quel est l'ordre de grandeur du budget ?"
            sub="Montant estimé de l'opération, en Dinars Algériens."
          >
            <div className="slider-wrap">
              <div className="slider-val">
                {BUDGETS[state.budgetIndex].label}
              </div>
              <p
                style={{
                  textAlign: 'center',
                  color: 'var(--muted)',
                  fontSize: '0.72rem',
                  marginBottom: '1.5rem',
                }}
              >
                Surface de référence : {BUDGETS[state.budgetIndex].surface}
              </p>
              <input
                type="range"
                min={0}
                max={BUDGETS.length - 1}
                step={1}
                value={state.budgetIndex}
                onChange={(e) => setState((s) => ({ ...s, budgetIndex: Number(e.target.value) }))}
                aria-label="Budget du projet"
              />
              <div className="slider-labels">
                <span className="slider-label">{BUDGETS[0].label}</span>
                <span className="slider-label">{BUDGETS[BUDGETS.length - 1].label}</span>
              </div>
            </div>
          </Step>
        )}

        {stepIndex === 3 && (
          <Step
            num="04"
            label="Phase du projet"
            question="Où en est votre projet ?"
          >
            <div className="options">
              {PHASES.map((p) => (
                <Opt
                  key={p.id}
                  radio
                  selected={state.phase === p.id}
                  onClick={() => setState((s) => ({ ...s, phase: p.id }))}
                  text={p.label}
                />
              ))}
            </div>
          </Step>
        )}

        {stepIndex === 4 && (
          <Step
            num="05"
            label="Points de friction"
            question="Quels blocages rencontrez-vous ?"
            sub="Plusieurs réponses possibles."
          >
            <div className="options">
              <div className="option-row">
                {BLOCAGES.map((b) => (
                  <Opt
                    key={b.id}
                    selected={state.blocages.includes(b.id)}
                    onClick={() => toggleBlocage(b.id)}
                    text={b.label}
                  />
                ))}
              </div>
            </div>
          </Step>
        )}

        {stepIndex === 5 && (
          <Step
            num="06"
            label="Contact"
            question="Vos coordonnées"
            sub="Optionnel. Pas de démarchage — vos coordonnées restent confidentielles."
          >
            <div className="field-group">
              <div className="field-row">
                <div className="field">
                  <label htmlFor="diag-prenom">Prénom</label>
                  <input
                    id="diag-prenom"
                    type="text"
                    value={state.prenom}
                    onChange={(e) => setState((s) => ({ ...s, prenom: e.target.value }))}
                    placeholder="Prénom"
                  />
                </div>
                <div className="field">
                  <label htmlFor="diag-nom">Nom</label>
                  <input
                    id="diag-nom"
                    type="text"
                    value={state.nom}
                    onChange={(e) => setState((s) => ({ ...s, nom: e.target.value }))}
                    placeholder="Nom"
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="diag-email">Email professionnel</label>
                <input
                  id="diag-email"
                  type="email"
                  value={state.email}
                  onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
                  placeholder="vous@entreprise.com"
                />
              </div>
            </div>
          </Step>
        )}

        <div className="step-nav">
          {stepIndex === 5 ? (
            <>
              <button type="button" className="btn-next" onClick={finish}>
                <span>Voir mon score →</span>
              </button>
              <button type="button" className="btn-back" onClick={finish}>
                Ignorer et voir le score →
              </button>
            </>
          ) : (
            <button type="button" className="btn-next" onClick={goNext} disabled={!canAdvance}>
              <span>Continuer →</span>
            </button>
          )}
          {stepIndex > 0 && (
            <button type="button" className="btn-back" onClick={goBack}>
              ← Retour
            </button>
          )}
          <span className="step-hint">
            {String(stepIndex + 1).padStart(2, '0')} / {String(TOTAL_STEPS).padStart(2, '0')} — {STEP_LABELS[stepIndex]}
          </span>
        </div>
      </div>
    </div>
  )
}

function Step({ num, label, question, sub, children }) {
  const parts = question.split(/\*(.+?)\*/)
  return (
    <div className="step active">
      <div className="step-num">
        <span>{num} — {label.toUpperCase()}</span>
      </div>
      <h1 className="step-q">
        {parts.map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part))}
      </h1>
      {sub && <p className="step-sub">{sub}</p>}
      {children}
    </div>
  )
}

function Opt({ radio, selected, onClick, text, sub }) {
  return (
    <div
      className={`opt ${radio ? 'radio' : ''} ${selected ? 'selected' : ''}`}
      onClick={onClick}
      role={radio ? 'radio' : 'checkbox'}
      aria-checked={selected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
    >
      <span className="opt-indicator">
        <svg viewBox="0 0 12 12" width="10" height="10">
          <path d="M2 6l3 3 5-6" stroke="var(--depth)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>
        <span className="opt-text">{text}</span>
        {sub && <span className="opt-sub" style={{ display: 'block' }}>{sub}</span>}
      </span>
    </div>
  )
}

function Result({ state, submitted, onRestart }) {
  const score = calcScore(state)
  const level = getLevel(score)
  const meta = getLevelMeta(level)
  const risks = getRisks(state)
  const reco = getReco({ ...state, score })
  const copy = getResultCopy(level)
  const ringDeg = score * 3.6

  return (
    <div id="page-diagnostic-result" style={{ background: 'var(--depth)', minHeight: '100vh' }}>
      <div className="diag-wrapper" style={{ alignItems: 'flex-start', minHeight: 'auto', paddingTop: 'clamp(7rem, 12vw, 10rem)' }}>
        <div id="step-result">
          <div className="result-header max-md:!grid-cols-1">
            <div>
              <div className="result-title">
                {copy.title[0]}
                <em>{copy.title[1]}</em>
              </div>
              <p className="result-intro">{copy.intro}</p>
              {submitted && state.email && (
                <p style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: '1rem' }}>
                  Une synthèse a été préparée pour {state.prenom || 'vous'} — retour sous 48h ouvrées.
                </p>
              )}
            </div>
            <div className="result-score-wrap">
              <div
                className="result-score-ring"
                style={{
                  background: `conic-gradient(var(--bronze) ${ringDeg}deg, var(--structure) ${ringDeg}deg)`,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 6,
                    borderRadius: '50%',
                    background: 'var(--surface)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className="score-num">{score}</div>
                  <div className="score-label">/ 100</div>
                </div>
              </div>
              <div className="result-level" style={{ borderColor: meta.color, color: meta.color }}>
                Risque {meta.label}
              </div>
            </div>
          </div>

          <div className="result-grid max-md:!grid-cols-1">
            {risks.map((r) => (
              <div className="risk-item" key={r.name}>
                <span className={`risk-level risk-${r.level}`}>
                  {r.level === 'high' ? 'Risque élevé' : r.level === 'medium' ? 'Risque modéré' : 'Risque faible'}
                </span>
                <span className="risk-name">{r.name}</span>
                <p className="risk-desc">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="result-reco">
            <div className="reco-label">Recommandation IMLEAD</div>
            <div className="reco-service">{reco.service}</div>
            <p className="reco-desc">{reco.desc}</p>
          </div>

          <div className="result-cta">
            <div className="result-cta-text">
              <strong>Prochaine étape</strong>
              Discuter de ces résultats avec un consultant IMLEAD, sans engagement.
            </div>
            <a href="mailto:Ho@im-lead.com" className="btn-cta-primary">
              <span>Prendre rendez-vous →</span>
            </a>
            <button type="button" className="btn-back" onClick={onRestart}>
              Refaire le diagnostic
            </button>
          </div>
          <p className="cta-reassure">Confidentiel. Aucune donnée transmise à des tiers.</p>
          <p style={{ marginTop: '2rem' }}>
            <Link to="/" className="btn-ghost">Retour à l'accueil</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
