// IMLEAD — Diagnostic module: config + pure scoring logic (client-side only).

export const PROFILS = [
  { id: 'investisseur', label: 'Investisseur' },
  { id: 'promoteur', label: 'Promoteur' },
  { id: 'dirigeant', label: 'Dirigeant', sub: "Dirigeant d'entreprise / maître d'ouvrage institutionnel" },
  { id: 'particulier', label: 'Particulier' },
]

export const TYPES = [
  { id: 'hotellerie', label: 'Hôtellerie & Resort' },
  { id: 'residentiel', label: 'Résidentiel premium' },
  { id: 'mixte', label: 'Mixte (résidentiel + retail)' },
  { id: 'bureaux', label: 'Bureaux & Corporate' },
  { id: 'rehabilitation', label: 'Réhabilitation / Restructuration' },
  { id: 'autre', label: 'Autre' },
]

// 7 paliers, DZD par défaut. Surface de référence = ordre de grandeur indicatif.
export const BUDGETS = [
  { min: 0, label: '< 100M DZD', surface: '< 500 m²' },
  { min: 100, label: '100 – 300M DZD', surface: '500 – 1 500 m²' },
  { min: 300, label: '300 – 500M DZD', surface: '1 500 – 2 500 m²' },
  { min: 500, label: '500M – 1Md DZD', surface: '2 500 – 5 000 m²' },
  { min: 1000, label: '1 – 3Md DZD', surface: '5 000 – 15 000 m²' },
  { min: 3000, label: '3 – 5Md DZD', surface: '15 000 – 25 000 m²' },
  { min: 5000, label: '> 5Md DZD', surface: '> 25 000 m²' },
]

export const PHASES = [
  { id: 'idee', label: 'Idée / intention' },
  { id: 'faisabilite', label: 'Faisabilité' },
  { id: 'conception', label: 'Conception' },
  { id: 'chantier', label: 'Chantier en cours' },
]

export const BLOCAGES = [
  { id: 'budget', label: 'Maîtrise budgétaire' },
  { id: 'planning', label: 'Respect des délais' },
  { id: 'intervenants', label: 'Coordination des intervenants' },
  { id: 'qualite', label: "Qualité d'exécution" },
  { id: 'admin', label: 'Complexité administrative' },
  { id: 'reporting', label: 'Visibilité / reporting' },
]

const PHASE_BASE = { idee: 85, faisabilite: 78, conception: 62, chantier: 45 }
const BLOCAGE_PENALTY = 6

export function calcScore({ phase, budgetIndex, blocages }) {
  let score = PHASE_BASE[phase] ?? 60
  score -= (blocages?.length ?? 0) * BLOCAGE_PENALTY
  // Complexité d'échelle : budget élevé (palier >= 4, soit >= 1Md DZD) sur un
  // projet déjà en conception ou en chantier resserre la marge de correction.
  if (budgetIndex >= 4 && (phase === 'conception' || phase === 'chantier')) {
    score -= 5
  }
  return Math.max(0, Math.min(100, Math.round(score)))
}

export function getLevel(score) {
  if (score >= 70) return 'low'
  if (score >= 40) return 'medium'
  return 'high'
}

const LEVEL_META = {
  low: { label: 'Maîtrisé', color: '#5a8a6a' },
  medium: { label: 'Modéré', color: 'var(--bronze)' },
  high: { label: 'Élevé', color: '#c47a5a' },
}

export function getLevelMeta(level) {
  return LEVEL_META[level]
}

const PHASE_RISK = {
  chantier: {
    name: 'Gouvernance de chantier',
    level: 'high',
    desc: 'Intervenir tard sur un chantier en cours coûte davantage, mais reste possible — la fenêtre de correction se resserre avec chaque semaine qui passe.',
  },
  conception: {
    name: 'Alignement programme / budget',
    level: 'medium',
    desc: 'La phase conception est le dernier moment pour corriger un dérapage à coût limité. Chaque semaine compte.',
  },
  faisabilite: {
    name: 'Cadrage stratégique',
    level: 'low',
    desc: 'Bonne position — la gouvernance peut encore être définie avant tout engagement financier.',
  },
  idee: {
    name: 'Cadrage stratégique',
    level: 'low',
    desc: 'Excellente position — vous pouvez encore définir la gouvernance avant tout engagement financier.',
  },
}

// Note : les risques ci-dessous évitent volontairement les statistiques non
// sourcées (charte éditoriale IMLEAD). Les tournures qualitatives remplacent
// les chiffres qui figuraient dans le brief initial et restaient à sourcer.
const BLOCAGE_RISK = {
  budget: {
    name: 'Dérive budgétaire',
    level: 'high',
    desc: "Sans système d'alerte précoce sur les postes de dépense, une dérive budgétaire se détecte tard — au moment où la corriger devient coûteux.",
  },
  intervenants: {
    name: 'Fragmentation des responsabilités',
    level: 'high',
    desc: 'Les interfaces non coordonnées entre corps de métiers sont une source récurrente de malfaçons et de retards.',
  },
  planning: {
    name: 'Glissement calendaire',
    level: 'medium',
    desc: 'Un retard de livraison impacte directement la rentabilité locative ou la commercialisation.',
  },
  admin: {
    name: 'Risque réglementaire',
    level: 'medium',
    desc: 'La complexité administrative algérienne nécessite un suivi dédié pour éviter les blocages en cours de chantier.',
  },
  qualite: {
    name: 'Non-conformité technique',
    level: 'medium',
    desc: "Sans contrôle qualité structuré, les désordres constatés après livraison sont plus coûteux à corriger qu'ils ne l'auraient été en cours de chantier.",
  },
  reporting: {
    name: "Déficit d'information",
    level: 'low',
    desc: "L'absence de reporting en temps réel laisse le maître d'ouvrage en position réactive plutôt que proactive.",
  },
}

const FALLBACK_RISK = {
  name: 'Coordination multidisciplinaire',
  level: 'medium',
  desc: 'Même les projets bien engagés nécessitent une coordination active entre tous les intervenants.',
}

// Ordre de priorité d'affichage si plusieurs blocages sont sélectionnés.
const BLOCAGE_PRIORITY = ['budget', 'intervenants', 'planning', 'admin', 'qualite', 'reporting']

export function getRisks({ phase, blocages }) {
  const risks = []
  const phaseRisk = PHASE_RISK[phase]
  if (phaseRisk) risks.push(phaseRisk)

  const ordered = BLOCAGE_PRIORITY.filter((id) => blocages?.includes(id))
  for (const id of ordered) {
    if (risks.length >= 4) break
    risks.push(BLOCAGE_RISK[id])
  }

  if (risks.length < 2) risks.push(FALLBACK_RISK)
  return risks.slice(0, 4)
}

export function getReco({ score, blocages, phase, type }) {
  const blocageCount = blocages?.length ?? 0

  if (score < 45 || blocageCount >= 4) {
    return {
      service: 'AMO complète — Pilotage & Gouvernance',
      desc: 'Votre projet présente plusieurs zones de fragilité simultanées. Une mission AMO complète, initiée dès maintenant, permettrait de structurer la gouvernance, arbitrer les décisions critiques et limiter les dépassements.',
    }
  }
  if (phase === 'chantier') {
    return {
      service: 'Rescue Mission — Reprise en cours de chantier',
      desc: 'Intervenir en cours de chantier est possible et souvent décisif. IMLEAD peut prendre en charge le pilotage technique, réaligner les intervenants et rétablir un reporting fiable en quelques semaines.',
    }
  }
  if (phase === 'idee' || phase === 'faisabilite') {
    return {
      service: 'Advisory & Audit Amont',
      desc: 'Vous êtes dans la meilleure position pour agir. Une mission de cadrage stratégique IMLEAD sécurise le programme, valide la faisabilité et structure la gouvernance avant tout engagement financier significatif.',
    }
  }
  if (type === 'hotellerie') {
    return {
      service: 'Operations & Hospitality Support',
      desc: 'Les projets hôteliers combinent des exigences techniques et opérationnelles spécifiques. IMLEAD accompagne de la définition du concept à la mise en exploitation.',
    }
  }
  return {
    service: 'AMO & Pilotage de projet',
    desc: 'Votre projet bénéficierait d\'un dispositif de pilotage structuré pour sécuriser le budget, le planning et la qualité de livraison. IMLEAD propose une évaluation précise de vos besoins sans engagement.',
  }
}

const RESULT_COPY = {
  low: {
    title: ['Votre projet est ', 'bien positionné.'],
    intro: 'Votre score indique un niveau de préparation satisfaisant. Des optimisations restent possibles — quelques ajustements de gouvernance maximiseront la performance de livraison.',
  },
  medium: {
    title: ['Votre projet présente ', 'des vulnérabilités.'],
    intro: 'Plusieurs risques sont identifiés sur votre projet. Sans intervention structurée, ils pourraient se traduire par des dépassements budgétaires ou calendaires significatifs.',
  },
  high: {
    title: ['Votre projet est ', 'exposé.'],
    intro: "Votre configuration présente des risques élevés sur plusieurs axes simultanément. Une intervention AMO rapide peut encore corriger la trajectoire avant que les coûts de correction n'augmentent.",
  },
}

export function getResultCopy(level) {
  return RESULT_COPY[level]
}
