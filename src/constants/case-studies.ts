export interface ICaseMetric {
  iconType: 'trend' | 'price' | 'click' | 'user' | 'percent'
  value: string
  labelKey: string
}

export interface ICaseStudy {
  id: string
  slug: string
  titleKey: string
  descriptionKey: string
  badgeValue: string
  badgeLabelKey: string
  image: string
  imagePosition: 'left' | 'right'
  metrics: ICaseMetric[]
  bulletKeys: string[]
}

export const allCaseStudies: ICaseStudy[] = [
  {
    id: 'rosela',
    slug: 'rosela-agribusiness',
    titleKey: 'CaseStudies.projects.rosela.title',
    descriptionKey: 'CaseStudies.projects.rosela.description',
    badgeValue: '-71%',
    badgeLabelKey: 'CaseStudies.projects.rosela.badgeLabel',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    imagePosition: 'left',
    metrics: [
      { iconType: 'trend', value: '5,830', labelKey: 'CaseStudies.projects.rosela.metric1' },
      { iconType: 'price', value: '0.24 DH', labelKey: 'CaseStudies.projects.rosela.metric2' },
      { iconType: 'trend', value: '+1,808%', labelKey: 'CaseStudies.projects.rosela.metric3' },
    ],
    bulletKeys: [
      'CaseStudies.projects.rosela.bullet1',
      'CaseStudies.projects.rosela.bullet2',
      'CaseStudies.projects.rosela.bullet3',
    ],
  },
  {
    id: 'vasilevi',
    slug: 'vasilevi-clean',
    titleKey: 'CaseStudies.projects.vasilevi.title',
    descriptionKey: 'CaseStudies.projects.vasilevi.description',
    badgeValue: '+90',
    badgeLabelKey: 'CaseStudies.projects.vasilevi.badgeLabel',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
    imagePosition: 'right',
    metrics: [
      { iconType: 'trend', value: '90+', labelKey: 'CaseStudies.projects.vasilevi.metric1' },
      { iconType: 'percent', value: '>10%', labelKey: 'CaseStudies.projects.vasilevi.metric2' },
      { iconType: 'trend', value: '3.8x', labelKey: 'CaseStudies.projects.vasilevi.metric3' },
    ],
    bulletKeys: [
      'CaseStudies.projects.vasilevi.bullet1',
      'CaseStudies.projects.vasilevi.bullet2',
      'CaseStudies.projects.vasilevi.bullet3',
    ],
  },
  {
    id: 'dacare',
    slug: 'da-care-probiotics',
    titleKey: 'CaseStudies.projects.dacare.title',
    descriptionKey: 'CaseStudies.projects.dacare.description',
    badgeValue: '+420',
    badgeLabelKey: 'CaseStudies.projects.dacare.badgeLabel',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    imagePosition: 'right',
    metrics: [
      { iconType: 'user', value: '420+', labelKey: 'CaseStudies.projects.dacare.metric1' },
      { iconType: 'trend', value: '1,785', labelKey: 'CaseStudies.projects.dacare.metric2' },
      { iconType: 'click', value: '32 Ads', labelKey: 'CaseStudies.projects.dacare.metric3' },
    ],
    bulletKeys: [
      'CaseStudies.projects.dacare.bullet1',
      'CaseStudies.projects.dacare.bullet2',
      'CaseStudies.projects.dacare.bullet3',
    ],
  },
  {
    id: 'slavchev',
    slug: 'slavchev-vasilev-law-firm',
    titleKey: 'CaseStudies.projects.slavchev.title',
    descriptionKey: 'CaseStudies.projects.slavchev.description',
    badgeValue: '+420',
    badgeLabelKey: 'CaseStudies.projects.slavchev.badgeLabel',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=80',
    imagePosition: 'left',
    metrics: [
      { iconType: 'trend', value: '420+', labelKey: 'CaseStudies.projects.slavchev.metric1' },
      { iconType: 'price', value: '5.38 DH', labelKey: 'CaseStudies.projects.slavchev.metric2' },
      { iconType: 'click', value: '0.67 DH', labelKey: 'CaseStudies.projects.slavchev.metric3' },
    ],
    bulletKeys: [
      'CaseStudies.projects.slavchev.bullet1',
      'CaseStudies.projects.slavchev.bullet2',
      'CaseStudies.projects.slavchev.bullet3',
    ],
  },
]