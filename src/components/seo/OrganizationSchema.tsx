interface OrganizationSchemaProps {
  locale?: string
}

export default function OrganizationSchema({ locale = 'fr' }: OrganizationSchemaProps) {
  const siteUrl = 'https://www.nexsetia.com'
  const phoneNumber = '+212655760065'

  // Descriptions localisées (FR / AR / EN) avec "Nexsetia" en alphabet latin
  const descriptions: Record<string, string> = {
    fr: 'Nexsetia est une agence marketing digital 360° au Maroc spécialisée en SEO, SEA, branding, développement web et acquisition digitale.',
    ar: 'Nexsetia هي وكالة تسويق رقمي 360° في المغرب متخصصة في تحسين محركات البحث، الإعلانات الممولة، الهوية البصرية، وتطوير الويب.',
    en: 'Nexsetia is a 360° digital marketing agency in Morocco specializing in SEO, SEA, branding, web development, and digital acquisition.',
  }

  const currentDescription = descriptions[locale] || descriptions.fr

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'Organization'],
    '@id': `${siteUrl}/#organization`,
    name: 'Nexsetia',
    legalName: 'Nexsetia',
    url: `${siteUrl}/${locale}`,
    telephone: phoneNumber,
    email: 'nexsetia@gmail.com',
    priceRange: '$$',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.webp`,
      caption: 'Nexsetia Digital Agency',
    },
    image: `${siteUrl}/logo.webp`,
    description: currentDescription,
    knowsLanguage: ['fr', 'ar', 'en'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '33.5731',
      longitude: '-7.5898',
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Morocco',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: phoneNumber,
      email: 'nexsetia@gmail.com',
      availableLanguage: ['French', 'Arabic', 'English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/nexsetia',
      'https://www.instagram.com/nexsetia',
      'https://www.facebook.com/nexsetia',
      'https://www.tiktok.com/@nexsetia',
    ],
    knowsAbout: [
      'Marketing Digital',
      'SEO (Search Engine Optimization)',
      'GEO (Generative Engine Optimization)',
      'SEA (Google Ads)',
      'Social Media Ads (Facebook & Instagram Ads)',
      'Branding & Identité visuelle',
      'Développement Web',
      'Développement Mobile',
      'UI/UX Design',
      'Création de contenu',
      'Automatisation IA',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}