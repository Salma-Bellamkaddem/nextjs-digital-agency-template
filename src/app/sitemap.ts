import type { MetadataRoute } from 'next'
import { services } from '@/constants/service'
import { blogPosts } from '@/constants/blog'
import { TARGET_CITIES } from '@/constants/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nexsetia.com'
  const locales = ['fr', 'ar', 'en'] as const
  const now = new Date()

  // Helper sécurisé pour construire les alternates avec gestion des slugs localisés si disponibles
  const buildAlternates = (getLocalizedPath: (loc: string) => string) => ({
    languages: {
      ...Object.fromEntries(
        locales.map((loc) => [loc, `${baseUrl}/${loc}${getLocalizedPath(loc)}`])
      ),
      'x-default': `${baseUrl}/fr${getLocalizedPath('fr')}`,
    },
  })

  const sitemapEntries: MetadataRoute.Sitemap = []

  // 1. Pages statiques principales
  const corePaths = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/recrutement', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  corePaths.forEach(({ path, priority, changeFrequency }) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: buildAlternates(() => path),
      })
    })
  })

  // 2. Pages Services — Sécurisation des slugs par langue si votre objet service le gère
  services.forEach((service) => {
    locales.forEach((locale) => {
      // Si vos slugs sont multilingues, utilisez service.slug[locale], sinon fallback sur service.slug
      const serviceSlug = typeof service.slug === 'object' ? service.slug[locale] : service.slug
      const path = `/services/${serviceSlug}`

      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
        alternates: buildAlternates((loc) => {
          const locSlug = typeof service.slug === 'object' ? service.slug[loc] : service.slug
          return `/services/${locSlug}`
        }),
      })
    })
  })

  // 3. Articles de blog
  blogPosts.forEach((post) => {
    const postDate = post.publishedAt ? new Date(post.publishedAt) : now
    const validDate = isNaN(postDate.getTime()) ? now : postDate

    locales.forEach((locale) => {
      // Idem : vérifiez si vos articles gèrent des slugs par langue, sinon utilisez le slug par défaut
      const postSlug = typeof post.slug === 'object' ? post.slug[locale] : post.slug
      const path = `/blog/${postSlug}`

      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: validDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
        alternates: buildAlternates((loc) => {
          const locSlug = typeof post.slug === 'object' ? post.slug[loc] : post.slug
          return `/blog/${locSlug}`
        }),
      })
    })
  })

  // 4. Pages villes (Les noms de villes restent généralement identiques, mais géré proprement)
  TARGET_CITIES.forEach((city) => {
    const path = `/agence-marketing-digital-${city.slug}`
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
        alternates: buildAlternates(() => path),
      })
    })
  })

  return sitemapEntries
}