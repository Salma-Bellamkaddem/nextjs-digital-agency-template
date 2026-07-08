import { ReactElement } from 'react';

declare global {
  interface IService {
    id: number;
    title: string;
    slug: string;
    description: string;      // Résumé pour la carte de l'accueil
    longDescription?: string;  // <-- NOUVEAU : Texte complet pour la page détail
    icon?: ReactElement;
    subServices?: string[];
    ctaLabel?: string;
    image?: string;
  }
}

export const services: IService[] = [
  {
    id: 1,
    title: 'Études de marché & Analyse des comportements',
    slug: 'etudes-marche',
    description: 'Comprenez en profondeur votre marché et les attentes de vos clients pour orienter vos décisions stratégiques.',
    longDescription: 'Notre méthodologie d’étude de marché combine des approches quantitatives et qualitatives avancées. Nous concevons des questionnaires sur-mesure diffusés auprès de panels qualifiés pour capter la réalité du terrain. Grâce à l’analyse sémantique des verbatims clients et à une veille concurrentielle intransigeante, nous décodons les motivations profondes de vos consommateurs. Vous obtenez un rapport stratégique clé en main, mettant en lumière les opportunités de croissance inexploitées, les barrières à l’entrée et une segmentation précise de votre future clientèle.',
    subServices: [
      'Enquêtes en ligne & questionnaires',
      'Analyses sémantiques & concurrentielles',
      'Comportements des consommateurs',
      'Segmentation, tendances & opportunités',
      'Analyse des besoins & attentes clients',
    ],
    ctaLabel: 'Découvrir',
    image: '/icons/content-strategy.png',
  },
  {
    id: 2,
    title: 'Analyse des données & suivi des performances',
    slug: 'analyse-donnees',
    description: 'Collectez, centralisez et visualisez vos indicateurs clés pour transformer vos données en insights actionnables.',
    longDescription: 'La donnée n’a de valeur que si elle est comprise. Nous intervenons pour structurer l’ensemble de vos flux de données business (CRM, site web, ventes, publicité). En centralisant ces informations dans des tableaux de bord interactifs et automatisés (Business Intelligence), nous vous offrons une visibilité en temps réel sur vos performances. Nos analystes traquent les anomalies, détectent les baisses de performance avant qu’elles ne deviennent critiques et traduisent les chiffres bruts en recommandations concrètes pour guider vos choix managériaux au quotidien.',
    subServices: [
      'Collecte, centralisation & segmentation',
      'Analyse des KPI',
      'Visualisation & croisement des données (BI)',
      'Détection de tendances & anomalies',
      'Insights actionnables & reporting décisionnel',
    ],
    ctaLabel: 'En savoir plus',
    image: '/icons/mobile-app.png',
  },
  {
    id: 3,
    title: "Stratégie d'acquisition (SEO, GEO & SEA)",
    slug: 'acquisition',
    description: 'Maximisez votre visibilité sur les moteurs de recherche traditionnels et génératifs pour attirer des prospects qualifiés.',
    longDescription: 'Pour exister aujourd’hui, votre entreprise doit être visible là où vos clients cherchent des réponses. Notre pôle acquisition combine le référencement naturel technique (SEO), la puissance immédiate des campagnes payantes Google Ads (SEA) et l’optimisation pour les nouveaux moteurs de recherche basés sur l’intelligence artificielle (GEO - Generative Engine Optimization). Nous réalisons un audit complet de votre écosystème, optimisons la structure sémantique de votre site et créons des campagnes publicitaires ultra-ciblées au ROI mesurable pour générer des prospects qualifiés en continu.',
    subServices: [
      'Audit SEO',
      'Optimisation SEO (technique & éditoriale)',
      'Campagnes SEA performantes',
      'Optimisation sur les moteurs génératifs (GEO)',
      'Suivi des KPI & veille concurrentielle',
    ],
    ctaLabel: 'Voir le service',
    image: '/icons/shopping.png',
  },
  {
    id: 4,
    title: 'Gestion des réseaux sociaux & Création de contenu',
    slug: 'social-media',
    description: 'Développez votre communauté et engagez votre audience grâce à un calendrier éditorial et des visuels impactants.',
    longDescription: 'Faites de vos réseaux sociaux un puissant levier d’acquisition et de fidélisation. Nous concevons une stratégie éditoriale sur-mesure alignée avec les codes de chaque plateforme (LinkedIn, Instagram, TikTok). De la direction artistique à la rédaction des scripts et des légendes, notre équipe prend en charge la production de vos contenus visuels et vidéos. En combinant un community management actif (gestion des interactions, réponses aux messages) et une analyse rigoureuse des statistiques d’engagement, nous transformons votre audience passive en une communauté d’ambassadeurs engagés.',
    subServices: [
      'Gestion & animation des réseaux sociaux',
      'Création de contenus visuels',
      'Calendrier éditorial & planification',
      'Community management',
      'Suivi des performances & ajustements',
    ],
    ctaLabel: 'Réserver un appel',
    image: '/icons/conversation.png',
  },
  {
    id: 5,
    title: 'Branding & Identité Visuelle',
    slug: 'branding',
    description: 'Bâtissez une image de marque forte, cohérente et mémorable sur l’ensemble de vos supports de communication.',
    longDescription: 'Votre identité visuelle est le premier point de contact avec votre public : elle se doit d’exprimer instantanément vos valeurs et votre professionnalisme. Nous créons des univers de marque uniques et pérennes. De la conception de votre logo phare à la définition d’une charte graphique complète (typographies, palettes de couleurs, règles d’usage), nous veillons à la cohérence de votre image. Nous déclinons cette identité sur tous vos supports essentiels : bannières de réseaux sociaux, cartes de visite premium, présentations commerciales et documents marketing.',
    subServices: [
      'Création de logo & bannières LinkedIn',
      'Charte graphique',
      'Cartes de visite',
      'Supports de communication/marketing',
    ],
    ctaLabel: 'Obtenir un devis',
    image: '/icons/pantone.png',
  },
  {
    id: 6,
    title: 'Sites Web & Développement',
    slug: 'dev',
    description: 'Concevez des solutions digitales modernes, performantes et évolutives pour développer votre activité.',
    longDescription: 'Nous développons des plateformes web et mobiles de haute performance, centrées sur l’expérience utilisateur (UX) et optimisées pour la conversion. Qu’il s’agisse d’un site vitrine élégant, d’une boutique e-commerce robuste ou d’une application web/mobile sur-mesure, nous utilisons les technologies les plus modernes et évolutives. Chaque projet bénéficie d’un design responsive soigné, d’un code optimisé pour le référencement et d’une sécurité maximale. Nous assurons également la maintenance et le support technique continu pour garantir la pérennité de votre outil digital.',
    subServices: [
      'Sites vitrines & e-commerce',
      'Landing pages à fort taux de conversion',
      'Applications Web sur mesure',
      'Applications mobiles (Android & iOS)',
      'UX/UI Design & Responsive Design',
      'Maintenance, optimisation & support',
    ],
    ctaLabel: 'Parlons de votre projet',
    image: '/icons/mobile-app.png',
  }
];