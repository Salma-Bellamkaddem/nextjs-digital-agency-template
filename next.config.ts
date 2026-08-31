import type { NextConfig } from 'next'

import bundleAnalyzer from '@next/bundle-analyzer'
import createNextIntlPlugin from 'next-intl/plugin'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const withNextIntl = createNextIntlPlugin(
  './src/i18n/request.ts'
)

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,

  // Redirections pour réparer les liens de services cassés (SEO)
  async redirects() {
    return [
      {
        source: '/:locale/services/seo-geo-sea',
        destination: '/:locale/services/acquisition',
        permanent: true,
      },
      {
        source: '/services/seo-geo-sea',
        destination: '/fr/services/acquisition',
        permanent: true,
      },
      {
        source: '/:locale/services/developpement-web-mobile',
        destination: '/:locale/services/dev',
        permanent: true,
      },
      {
        source: '/services/developpement-web-mobile',
        destination: '/fr/services/dev',
        permanent: true,
      },
      {
        source: '/:locale/services/etudes-de-marche',
        destination: '/:locale/services/etudes-marche',
        permanent: true,
      },
      {
        source: '/services/etudes-de-marche',
        destination: '/fr/services/etudes-marche',
        permanent: true,
      },
    ]
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,

      use: [
        {
          loader: '@svgr/webpack',

          options: {
            dimensions: false,

            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',

                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
                'removeDimensions',
              ],
            },
          },
        },
      ],
    })

    return config
  },
}

export default withBundleAnalyzer(
  withNextIntl(nextConfig)
)