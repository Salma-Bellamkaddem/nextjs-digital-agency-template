export type CaseSectionType =
  | 'split'          // Texte + Image latérale
  | 'video'          // Vidéo YouTube + Témoignage client
  | 'table_results'  // Tableau comparatif de métriques
  | 'three_cards'    // 3 Cartes (Problèmes, Résultats, Services)
  | 'full_image'     // Image grand format / Dashboard analytique

export interface ICaseSection {
  type: CaseSectionType
  partBadge?: string
  titleKey: string
  subtitleKey?: string
  descriptionKey?: string
  bulletKeys?: string[]
  image?: string
  imagePosition?: 'left' | 'right'
  imageCaptionKey?: string
  videoUrl?: string
  testimonial?: {
    author: string
    roleKey: string
    avatar: string
    quoteKey: string
  }
  tableRows?: {
    metricKey: string
    resultKey: string
    periodKey: string
  }[]
  cards?: {
    titleKey: string
    itemsKeys: { headingKey: string; bulletKeys: string[] }[]
  }[]
}

export interface ICaseStudyDetail {
  slug: string
  clientName: string
  industryKey: string
  heroTagKey: string
  heroTitleKey: string
  heroSubtitleKey: string
  heroMetrics: { value: string; labelKey: string }[]
  summaryTlDrKey: string
  sections: ICaseSection[]
  faq: { questionKey: string; answerKey: string }[]
}

// ── Exemple de données réutilisables modulaires ──
export const caseStudiesDetails: Record<string, ICaseStudyDetail> = {
  'rosela-agribusiness': {
    slug: 'rosela-agribusiness',
    clientName: 'ROSELA AD',
    industryKey: 'CaseDetail.rosela.industry',
    heroTagKey: 'CaseDetail.rosela.heroTag',
    heroTitleKey: 'CaseDetail.rosela.heroTitle',
    heroSubtitleKey: 'CaseDetail.rosela.heroSubtitle',
    heroMetrics: [
      { value: '5,800+', labelKey: 'CaseDetail.rosela.metrics.conversions' },
      { value: '0.24 DH', labelKey: 'CaseDetail.rosela.metrics.cpa' },
      { value: '5,500+', labelKey: 'CaseDetail.rosela.metrics.users' },
    ],
    summaryTlDrKey: 'CaseDetail.rosela.summary',
    sections: [
      {
        type: 'video',
        titleKey: 'CaseDetail.rosela.videoSection.title',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Remplacez par votre lien vidéo
        testimonial: {
          author: 'Tzvetelina Bikoff',
          roleKey: 'CaseDetail.rosela.testimonial.role',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
          quoteKey: 'CaseDetail.rosela.testimonial.quote',
        },
      },
      {
        type: 'three_cards',
        titleKey: 'CaseDetail.rosela.analysis.title',
        cards: [
          {
            titleKey: 'CaseDetail.rosela.analysis.col1Title',
            itemsKeys: [
              {
                headingKey: 'CaseDetail.rosela.analysis.p1',
                bulletKeys: ['CaseDetail.rosela.analysis.p1b1', 'CaseDetail.rosela.analysis.p1b2'],
              },
            ],
          },
          {
            titleKey: 'CaseDetail.rosela.analysis.col2Title',
            itemsKeys: [
              {
                headingKey: 'CaseDetail.rosela.analysis.r1',
                bulletKeys: ['CaseDetail.rosela.analysis.r1b1', 'CaseDetail.rosela.analysis.r1b2'],
              },
            ],
          },
          {
            titleKey: 'CaseDetail.rosela.analysis.col3Title',
            itemsKeys: [
              {
                headingKey: 'CaseDetail.rosela.analysis.s1',
                bulletKeys: ['CaseDetail.rosela.analysis.s1b1', 'CaseDetail.rosela.analysis.s1b2'],
              },
            ],
          },
        ],
      },
      {
        type: 'split',
        partBadge: 'PART I',
        titleKey: 'CaseDetail.rosela.challenge.title',
        descriptionKey: 'CaseDetail.rosela.challenge.desc',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
        imagePosition: 'left',
        bulletKeys: [
          'CaseDetail.rosela.challenge.b1',
          'CaseDetail.rosela.challenge.b2',
          'CaseDetail.rosela.challenge.b3',
        ],
      },
      {
        type: 'table_results',
        partBadge: 'PART II',
        titleKey: 'CaseDetail.rosela.table.title',
        descriptionKey: 'CaseDetail.rosela.table.desc',
        tableRows: [
          { metricKey: 'CaseDetail.rosela.table.m1', resultKey: '5,500+', periodKey: 'January - June 2026' },
          { metricKey: 'CaseDetail.rosela.table.m2', resultKey: '5,830 leads', periodKey: 'February - June 2026' },
          { metricKey: 'CaseDetail.rosela.table.m3', resultKey: '0.07 DH', periodKey: '4.5 months' },
          { metricKey: 'CaseDetail.rosela.table.m4', resultKey: '0.24 DH', periodKey: '4.5 months' },
          { metricKey: 'CaseDetail.rosela.table.m5', resultKey: '1,500 new users', periodKey: '6 months' },
        ],
      },
      {
        type: 'split',
        partBadge: 'PART III',
        titleKey: 'CaseDetail.rosela.infrastructure.title',
        subtitleKey: 'CaseDetail.rosela.infrastructure.sub',
        descriptionKey: 'CaseDetail.rosela.infrastructure.desc',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        imagePosition: 'right',
      },
      {
        type: 'split',
        partBadge: 'PART IV',
        titleKey: 'CaseDetail.rosela.website.title',
        descriptionKey: 'CaseDetail.rosela.website.desc',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80',
        imagePosition: 'left',
        bulletKeys: [
          'CaseDetail.rosela.website.b1',
          'CaseDetail.rosela.website.b2',
          'CaseDetail.rosela.website.b3',
        ],
      },
    ],
    faq: [
      {
        questionKey: 'CaseDetail.rosela.faq.q1',
        answerKey: 'CaseDetail.rosela.faq.a1',
      },
      {
        questionKey: 'CaseDetail.rosela.faq.q2',
        answerKey: 'CaseDetail.rosela.faq.a2',
      },
    ],
  },
}