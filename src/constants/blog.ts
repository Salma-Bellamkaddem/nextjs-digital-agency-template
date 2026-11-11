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
  excerptKey?: string
  tagsKeys: string[]
  keywords?: string[]
  publishedAt: string
  heroImageAlt?: string
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

  // À AJOUTER dans le tableau blogPosts de "@/constants/blog" (après l'article baselineBuzz)
// Images à placer dans /public/blog/nvidia/  (JPEG de préférence : le scraper WhatsApp/Facebook préfère .jpeg)

{
  id: '2',
  slug: 'nvidia-jensen-huang-enjeux-puces-ia',

  titleKey: 'Blog.posts.nvidiaHuang.title',

  excerptKey: 'Blog.posts.nvidiaHuang.seoDescription',

  heroImage: '/blog/nvidia/Nvidia.png',

  heroImageAlt: 'Jensen Huang et NVIDIA au cœur de l’industrie mondiale des puces IA',

  keywords: [
    'NVIDIA',
    'Jensen Huang',
    'puces IA',
    'intelligence artificielle',
    'semi-conducteurs',
    'technologie'
  ],

  tagsKeys: [
    'Blog.tags.finance',
    'Blog.tags.tech'
  ],

  publishedAt: '11 novembre 2026',
  updatedAt: '11 novembre 2026',
  readingTime: '5 minutes',
  // IMAGE 1 : Jensen Huang - Image principale (1200x630)


  sections: [
    // INTRODUCTION
    {
      paragraphsKeys: [
        'Blog.posts.nvidiaHuang.p1',
      ],
    },

    // IMAGE 2 : Alice Huang
    {
      paragraphsKeys: [
        'Blog.posts.nvidiaHuang.p2',
      ],
      image: {
        src: '/blog/nvidia/alice-huang.jpg',
        altKey: 'Blog.posts.nvidiaHuang.aliceAlt',
        captionKey: 'Blog.posts.nvidiaHuang.aliceCaption',
      },
    },

    // IMAGE 3 : Graphique de l'action NVIDIA
    {
      paragraphsKeys: [
        'Blog.posts.nvidiaHuang.p3',
      ],
      image: {
        src: '/blog/nvidia/nvidia-graphique.jpeg',
        altKey: 'Blog.posts.nvidiaHuang.img1Alt',
        captionKey: 'Blog.posts.nvidiaHuang.img1Caption',
      },
    },

    // IMAGE 4 : Siège social NVIDIA
    {
      paragraphsKeys: [
        'Blog.posts.nvidiaHuang.p4',
      ],
      image: {
        src: '/blog/nvidia/nvidia-siege.jpeg',
        altKey: 'Blog.posts.nvidiaHuang.img2Alt',
        captionKey: 'Blog.posts.nvidiaHuang.img2Caption',
      },
      showMidArticleCta: true,
    },

    // CONCLUSION
    {
      paragraphsKeys: [
        'Blog.posts.nvidiaHuang.p5',
        'Blog.posts.nvidiaHuang.p6',
        'Blog.posts.nvidiaHuang.p7',
      ],
    },
  ],

  // FAQ
  faq: [
    {
      questionKey: 'Blog.posts.nvidiaHuang.faq1Q',
      answerKey: 'Blog.posts.nvidiaHuang.faq1A',
    },
    {
      questionKey: 'Blog.posts.nvidiaHuang.faq2Q',
      answerKey: 'Blog.posts.nvidiaHuang.faq2A',
    },
  ],
},

]