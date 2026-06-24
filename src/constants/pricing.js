// ─── Données des packs EXSETIA ─────────────────────────────────────────────
// Utilisé par HomePricing (aperçu sur la home) et app/pricing/page (détail SEO)

export const PRICING_PACKS = [
  {
    id: 'starter',
    name: 'Starter',
    target: 'Petite entreprise (TPE / Indépendants)',
    tagline:
      'Établir une présence digitale professionnelle, rapide et efficace.',
    highlighted: false,
    services: [
      {
        label: 'Création Web',
        detail:
          'Site vitrine standard (1 à 5 pages) basé sur des modèles optimisés, design responsive, certificat SSL et hébergement.',
        duration: '2 à 4 semaines',
      },
      {
        label: 'SEO',
        detail:
          'Recherche de mots-clés de base, optimisation technique (balises Title/Meta) et indexation Google Search Console.',
        duration: 'Audit : 1 mois',
      },
      {
        label: 'Publicité (Ads)',
        detail:
          "Configuration d'une campagne publicitaire locale (Google Business Profile ou Facebook Ads local) pour générer des appels ou visites.",
        duration: 'Mise en ligne : 1 semaine',
      },
      {
        label: 'Optimisation',
        detail:
          'Amélioration de la vitesse de chargement et sécurisation de base.',
        duration: 'Inclus dans la création',
      },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    target: 'Entreprise en croissance (PME)',
    tagline: 'Attirer activement des prospects et convertir le trafic en clients.',
    highlighted: true,
    services: [
      {
        label: 'Création Web',
        detail:
          'Site vitrine étendu ou plateforme e-commerce standard avec gestion de catalogue et paiements en ligne.',
        duration: '4 à 8 semaines',
      },
      {
        label: 'SEO',
        detail:
          'Stratégie de contenu mensuelle, optimisation sémantique approfondie et suivi des positions.',
        duration: 'Résultats visibles en 3 à 6 mois',
      },
      {
        label: 'Publicité (Ads)',
        detail:
          'Gestion mensuelle multicanale (Google Ads + Social Ads) avec tests A/B et rapports de performance orientés ROI.',
        duration: 'Accompagnement continu',
      },
      {
        label: 'Optimisation',
        detail:
          "Analyse du comportement utilisateur (Heatmaps) et optimisation du taux de conversion (CRO).",
        duration: 'Révision mensuelle',
      },
    ],
  },
  {
    id: 'expert',
    name: 'Expert',
    target: 'Entreprise établie (Grands comptes)',
    tagline: 'Dominer un marché avec une infrastructure technique robuste.',
    highlighted: false,
    services: [
      {
        label: 'Création Web',
        detail:
          'Plateforme sur mesure (+20 pages), intégration CRM/ERP et fonctionnalités avancées (réservations, espaces membres).',
        duration: '2 à 4 mois',
      },
      {
        label: 'SEO',
        detail:
          'Audit technique complet, stratégie de netlinking (backlinks) et création intensive de contenu optimisé.',
        duration: 'Engagement recommandé : 1 an minimum',
      },
      {
        label: 'Publicité (Ads)',
        detail:
          'Stratégies complexes de retargeting, gestion de budgets élevés et pilotage aligné sur les enjeux stratégiques.',
        duration: 'Accompagnement continu',
      },
      {
        label: 'Optimisation',
        detail:
          'Optimisation des Core Web Vitals, maintenance de sécurité critique et refonte technique si nécessaire.',
        duration: 'Refonte : env. 6 mois',
      },
    ],
  },
]