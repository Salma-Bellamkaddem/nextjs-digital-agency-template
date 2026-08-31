export interface ICityLocation {
  slug: string
  nameKey: string
  regionKey: string
  metaTitleKey: string
  metaDescKey: string
  heroTaglineKey: string
  contextTextKey: string
  priorityServices: string[]
}

export const TARGET_CITIES: ICityLocation[] = [
  {
    slug: 'casablanca',
    nameKey: 'Locations.casablanca.name',
    regionKey: 'Locations.casablanca.region',
    metaTitleKey: 'Locations.casablanca.metaTitle',
    metaDescKey: 'Locations.casablanca.metaDesc',
    heroTaglineKey: 'Locations.casablanca.heroTagline',
    contextTextKey: 'Locations.casablanca.contextText',
    priorityServices: ['acquisition', 'dev', 'startups-mvp', 'branding'],
  },
  {
    slug: 'rabat',
    nameKey: 'Locations.rabat.name',
    regionKey: 'Locations.rabat.region',
    metaTitleKey: 'Locations.rabat.metaTitle',
    metaDescKey: 'Locations.rabat.metaDesc',
    heroTaglineKey: 'Locations.rabat.heroTagline',
    contextTextKey: 'Locations.rabat.contextText',
    priorityServices: ['enterprise-apps', 'etudes-marche', 'dev', 'acquisition'],
  },
  {
    slug: 'marrakech',
    nameKey: 'Locations.marrakech.name',
    regionKey: 'Locations.marrakech.region',
    metaTitleKey: 'Locations.marrakech.metaTitle',
    metaDescKey: 'Locations.marrakech.metaDesc',
    heroTaglineKey: 'Locations.marrakech.heroTagline',
    contextTextKey: 'Locations.marrakech.contextText',
    priorityServices: ['social-media', 'branding', 'acquisition', 'dev'],
  },
]