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
    slug: 'quand-vaseline-devient-baseline-buzz-marketing',
    titleKey: 'Blog.posts.baselineBuzz.title',
    tagsKeys: [
      'Blog.tags.socialMedia',
      'Blog.tags.inbound',
    ],
    publishedAt: '8 septembre 2026',
    updatedAt: '8 septembre 2026',
    readingTime: '4 minutes',
    heroImage: '/blog/baseline/Baseline.jpeg',
    sections: [
      {
        paragraphsKeys: [
          'Blog.posts.baselineBuzz.p1',
        ],
        image: {
          src: '/blog/baseline/Baseline1.jpeg',
          altKey: 'Blog.posts.baselineBuzz.img1Alt',
          captionKey: 'Blog.posts.baselineBuzz.img1Caption',
        },
      },
      {
        paragraphsKeys: [
          'Blog.posts.baselineBuzz.p2',
        ],
        image: {
          src: '/blog/baseline/baseline3-1.jpg',
          altKey: 'Blog.posts.baselineBuzz.img2Alt',
          captionKey: 'Blog.posts.baselineBuzz.img2Caption',
        },
        showMidArticleCta: true,
      },
      {
        paragraphsKeys: [
          'Blog.posts.baselineBuzz.p3',
        ],
      },
      {
        paragraphsKeys: [
          'Blog.posts.baselineBuzz.p4',
        ],
        image: {
          src: '/blog/baseline/statement.jpeg',
          altKey: 'Blog.posts.baselineBuzz.img4Alt',
          captionKey: 'Blog.posts.baselineBuzz.img4Caption',
        },
      },
      {
        paragraphsKeys: [
          'Blog.posts.baselineBuzz.p5',
          'Blog.posts.baselineBuzz.p6',
          'Blog.posts.baselineBuzz.p7',
        ],
      },
    ],
    faq: [
      {
        questionKey: 'Blog.posts.baselineBuzz.faq1Q',
        answerKey: 'Blog.posts.baselineBuzz.faq1A',
      },
      {
        questionKey: 'Blog.posts.baselineBuzz.faq2Q',
        answerKey: 'Blog.posts.baselineBuzz.faq2A',
      },
    ],
  },
]