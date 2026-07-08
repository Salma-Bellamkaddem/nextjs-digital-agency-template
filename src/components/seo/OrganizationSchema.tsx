export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "ProfessionalService",

    name: "Nexsetia",

    url: "https://www.nexsetia.com",

    logo: "https://www.nexsetia.com/logo.png",

    image: "https://www.nexsetia.com/og-image.jpg",

    description:
  "Nexsetia est une agence marketing digital 360° au Maroc spécialisée en SEO, SEA, branding, développement web et acquisition digitale.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Morocco"
    },

    areaServed: "Morocco",

    email: "nexsetia@gmail.com",

    telephone: "+212655760065",

    sameAs: [
      "https://www.linkedin.com/company/nexsetia",
      "https://www.instagram.com/nexsetia",
      "https://www.facebook.com/nexsetia",
      "https://www.tiktok.com/@nexsetia"
    ],

    knowsAbout: [
      "Marketing Digital",
      "SEO",
      "GEO",
      "SEA",
      "Google Ads",
      "Facebook Ads",
      "Branding",
      "Développement Web",
      "Développement Mobile",
      "UI UX Design",
      "Création de contenu",
      "Automatisation IA"
    ]
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