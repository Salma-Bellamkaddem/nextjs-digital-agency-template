export interface IFullCaseStudy {
  id: string
  slug: string
  titleKey: string
  descriptionKey: string
  image: string
  imagePosition: 'left' | 'right'
  bullets: string[]
}

export const fullCaseStudiesList: IFullCaseStudy[] = [
  {
    id: 'rosela',
    slug: 'rosela-agribusiness',
    titleKey: 'Rosela AD: 5,830 leads with Google Ads | Case study',
    descriptionKey: 'See how Rosela AD moved from a local producer to a digital leader, generating 5,830 leads with Google Ads at BGN 0.24 per inquiry. A full breakdown of the Nexsetia strategy.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
    imagePosition: 'left',
    bullets: [
      '5,830 Google Ads conversions at BGN 0.24 per result.',
      '1,808% growth in digital visibility.',
      'From 0 to 5,500+ new website users.',
    ],
  },
  {
    id: 'vasilevi',
    slug: 'vasilevi-clean',
    titleKey: 'Vasilevi Clean: Over 90 Qualified Inquiries with Google Ads | Case Study',
    descriptionKey: 'See how a conversion-focused website, accurate tracking and continuous Google Ads optimization helped a family-owned cleaning company build a predictable flow of qualified inquiries.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
    imagePosition: 'right',
    bullets: [
      'Over 90 qualified inquiries confirmed by the client.',
      'CTR above 10% with optimization based on real contacts.',
      'A new website with clear services, pricing and conversion paths.',
    ],
  },
  {
    id: 'dacare',
    slug: 'da-care-probiotics',
    titleKey: 'Da.care: UK market entry for baby probiotics | Case study',
    descriptionKey: 'See how Nexsetia helped the Swiss startup Da.care enter the UK probiotics market with AI-assisted research and a Meta campaign. 420+ subscribers in one month.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    imagePosition: 'right',
    bullets: [
      'Analysis of 9 key competitors and 32 different ads.',
      '1,785 consumer survey responses collected.',
      '420+ new subscribers in one month.',
    ],
  },
  {
    id: 'slavchev',
    slug: 'slavchev-vasilev-law-firm',
    titleKey: 'Slavchev & Vasilev: 420 inquiries in 3 months | Case study',
    descriptionKey: 'A website and Google Ads setup from zero to 420+ real inquiries in 3 months for Slavchev & Vasilev Law Firm. Low CPC and measurable results.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=80',
    imagePosition: 'left',
    bullets: [
      '420+ qualified legal inquiries in 90 days.',
      'Cost per inquiry reduced by 64% against competitor benchmark.',
      'Full tracking and CRM integration.',
    ],
  },
]