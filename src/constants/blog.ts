export interface IBlogFaq {
  questionKey: string
  answerKey: string
}

export interface IBlogSection {
  headingKey?: string
  paragraphsKeys: string[]
  exampleKey?: string
  image?: {
    src: string
    altKey: string
    captionKey?: string
  }
  showMidArticleCta?: boolean
  bulletPointsKeys?: string[]
}

export interface IBlogPost {
  id: string
  slug: string
  titleKey: string
  tagsKeys: string[]
  publishedAt: string
  updatedAt: string
  readingTime: string
  heroImage: string
  sections: IBlogSection[]
  faq: IBlogFaq[]
}

export const blogPosts: IBlogPost[] = [
  {
    id: '1',
    slug: 'strategies-cles-acquisition-digitale-maroc',
    titleKey: 'Blog.posts.acquisitionStrategies.title',
    tagsKeys: [
      'Blog.tags.acquisition',
      'Blog.tags.seo',
      'Blog.tags.ads',
      'Blog.tags.socialMedia',
      'Blog.tags.inbound',
    ],
    publishedAt: '14 juillet 2026',
    updatedAt: '23 juillet 2026',
    readingTime: '12 minutes',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    sections: [
      {
        paragraphsKeys: [
          'Blog.posts.acquisitionStrategies.intro1',
          'Blog.posts.acquisitionStrategies.intro2',
          'Blog.posts.acquisitionStrategies.intro3',
        ],
        showMidArticleCta: true,
      },
      {
        headingKey: 'Blog.posts.acquisitionStrategies.section1Title',
        paragraphsKeys: [
          'Blog.posts.acquisitionStrategies.section1P1',
          'Blog.posts.acquisitionStrategies.section1P2',
          'Blog.posts.acquisitionStrategies.section1P3',
        ],
      },
      {
        headingKey: 'Blog.posts.acquisitionStrategies.section2Title',
        paragraphsKeys: [
          'Blog.posts.acquisitionStrategies.section2P1',
          'Blog.posts.acquisitionStrategies.section2P2',
        ],
        exampleKey: 'Blog.posts.acquisitionStrategies.section2Example',
        image: {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          altKey: 'Blog.posts.acquisitionStrategies.schemaAlt',
          captionKey: 'Blog.posts.acquisitionStrategies.schemaCaption',
        },
      },
      {
        paragraphsKeys: [
          'Blog.posts.acquisitionStrategies.section3P1',
        ],
        exampleKey: 'Blog.posts.acquisitionStrategies.section3Example',
        showMidArticleCta: true,
      },
    ],
    faq: [
      {
        questionKey: 'Blog.posts.acquisitionStrategies.faq1Q',
        answerKey: 'Blog.posts.acquisitionStrategies.faq1A',
      },
      {
        questionKey: 'Blog.posts.acquisitionStrategies.faq2Q',
        answerKey: 'Blog.posts.acquisitionStrategies.faq2A',
      },
      {
        questionKey: 'Blog.posts.acquisitionStrategies.faq3Q',
        answerKey: 'Blog.posts.acquisitionStrategies.faq3A',
      },
    ],
  },
]