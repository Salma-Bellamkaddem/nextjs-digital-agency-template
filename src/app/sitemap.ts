import type { MetadataRoute } from 'next'
import { services } from '@/constants/service'
import { blogPosts } from '@/constants/blog'
import { TARGET_CITIES } from '@/constants/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nexsetia.com'
  const locales = ['fr', 'ar', 'en']
  const now = new Date()

  // Génère les entrées hreflang pour FR, AR, EN + la balise par défaut x-default
  const buildAlternates = (path: string) => ({
    languages: {
      ...Object.fromEntries(
        locales.map((loc) => [loc, `${baseUrl}/${loc}${path}`])
      ),
      'x-default': `${baseUrl}/fr${path}`,
    },
  })

  const sitemapEntries: MetadataRoute.Sitemap = []

  // 1. Pages statiques principales (Accueil, Blog, Recrutement)
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
        alternates: buildAlternates(path),
      })
    })
  })

  // 2. Pages Services dynamiques
  services.forEach((service) => {
    const path = `/services/${service.slug}`
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
        alternates: buildAlternates(path),
      })
    })
  })

  // 3. Articles de Blog dynamiques (FR, AR, EN avec date réelle de publication)
  blogPosts.forEach((post) => {
    const path = `/blog/${post.slug}`
    const postDate = post.publishedAt ? new Date(post.publishedAt) : now
    const validDate = isNaN(postDate.getTime()) ? now : postDate

    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: validDate,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
        alternates: buildAlternates(path),
      })
    })
  })

  // 4. Pages SEO Locales (Villes cibles)
  TARGET_CITIES.forEach((city) => {
    const path = `/agence-marketing-digital-${city.slug}`
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.85,
        alternates: buildAlternates(path),
      })
    })
  })

  return sitemapEntries
}