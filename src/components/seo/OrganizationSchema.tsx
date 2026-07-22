export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'Organization'],
    name: 'Nexsetia',
    legalName: 'Nexsetia',
    url: 'https://www.nexsetia.com',
    logo: 'https://www.nexsetia.com/logo.webp',
    image: 'https://www.nexsetia.com/logo.webp',
    description:
      'Nexsetia est une agence marketing digital 360° au Maroc spécialisée en SEO, SEA, branding, développement web et acquisition digitale.',
    email: 'nexsetia@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Morocco',
    },
    sameAs: [
      'https://www.linkedin.com/company/nexsetia',
      'https://www.instagram.com/nexsetia',
      'https://www.facebook.com/nexsetia',
      'https://www.tiktok.com/@nexsetia',
    ],
    knowsAbout: [
      'Marketing Digital',
      'SEO',
      'GEO',
      'SEA',
      'Google Ads',
      'Facebook Ads',
      'Branding',
      'Développement Web',
      'Développement Mobile',
      'UI UX Design',
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