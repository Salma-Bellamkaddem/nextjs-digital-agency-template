// ──────────────────────────────────────────────────────────────
// Données de la FAQ — modifiez uniquement ce fichier pour changer
// les questions, réponses ou icônes affichées.
//
// `icon` doit correspondre à une des clés définies dans
// `FAQ_ICONS` du fichier home-faq.tsx (design) :
//   'rocket' | 'clock' | 'document' | 'globe' | 'headset'
// ──────────────────────────────────────────────────────────────

export type FaqIconKey = 'rocket' | 'clock' | 'document' | 'globe' | 'headset'

export type FaqItem = {
  id: string
  icon: FaqIconKey
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'demarrage-projet',
    icon: 'rocket',
    question: 'Comment démarre un projet ?',
    answer:
      "Chaque projet commence par un échange afin de comprendre vos besoins, vos objectifs et votre marché. Ensuite, nous analysons les informations pour vous proposer une stratégie sur-mesure et un plan d'action clair.",
  },
  {
    id: 'delais',
    icon: 'clock',
    question: 'Quels sont les délais ?',
    answer:
      "Les délais varient selon la complexité du projet. Un site vitrine peut être livré en quelques semaines, tandis qu'une plateforme sur-mesure demandera davantage de temps. Nous vous communiquons un calendrier précis dès le début de la collaboration.",
  },
  {
    id: 'devis',
    icon: 'document',
    question: 'Comment obtenez-vous un devis ?',
    answer:
      "Contactez-nous via le formulaire ou en réservant un appel. Après un premier échange pour cerner vos besoins, nous vous envoyons un devis détaillé et sans engagement sous 48h.",
  },
  {
    id: 'distance',
    icon: 'globe',
    question: 'Travaillez-vous à distance ?',
    answer:
      "Oui, nous travaillons avec des clients partout dans le monde. Toute la collaboration peut se faire à distance grâce à des points réguliers en visioconférence et des outils de suivi de projet partagés.",
  },
  {
    id: 'accompagnement',
    icon: 'headset',
    question: 'Proposez-vous un accompagnement ?',
    answer:
      "Absolument. Au-delà de la livraison du projet, nous proposons un accompagnement continu : maintenance, évolutions, optimisation des performances et support technique réactif.",
  },
]