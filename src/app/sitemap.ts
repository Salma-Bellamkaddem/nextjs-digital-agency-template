import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nexsetia.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },

    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${baseUrl}/services/marketing-digital`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/seo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/developpement-web`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/services/branding`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}