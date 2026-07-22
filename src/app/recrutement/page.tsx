import HomeTeam from '@/app/_components/home-our-motivation' // Ajustez le chemin selon votre projet

export const metadata = {
  title: "Recrutement & Offres d'emploi | Nexsetia",
  description:
    'Rejoignez Nexsetia, agence spécialisée en marketing digital et solutions web. Découvrez nos opportunités et postulez directement en ligne.',
  keywords: [
    'Recrutement marketing digital',
    'Emploi développeur web',
    'Stage marketing',
    'Nexsetia recrutement',
  ],
  openGraph: {
    title: "Rejoignez l'aventure Nexsetia !",
    description: 'Nous recrutons des talents en marketing digital et développement web.',
    url: 'https://www.nexsetia.com/recrutement',
    siteName: 'Nexsetia',
    type: 'website',
  },
}

export default function RecrutementPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: 'Développeur / Chargé Marketing Digital',
    description:
      "Rejoignez l'équipe Nexsetia pour participer à des projets digitaux innovants.",
    identifier: {
      '@type': 'PropertyValue',
      name: 'Nexsetia',
      value: 'NEX-01',
    },
    datePosted: '2026-07-22',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Nexsetia',
      sameAs: 'https://www.nexsetia.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Casablanca',
        addressCountry: 'MA',
      },
    },
  }

  return (
    <main>
      {/* Balise SEO pour Google for Jobs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Votre composant Formulaire */}
      <HomeTeam />
    </main>
  )
}