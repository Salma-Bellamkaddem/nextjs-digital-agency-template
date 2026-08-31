import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

export default getRequestConfig(
  async ({ requestLocale }) => {
    console.log('')
    console.log('🔵 REQUEST CONFIG')
    console.log('────────────────────────────────')

    const locale = await requestLocale

    console.log(
      '🌍 requestLocale:',
      locale
    )

    if (
      !locale ||
      !routing.locales.includes(
        locale as (typeof routing.locales)[number]
      )
    ) {
      console.log(
        '⚠️ Invalid/undefined locale → default:',
        routing.defaultLocale
      )

      const messages = (
        await import(
          `../../messages/${routing.defaultLocale}.json`
        )
      ).default

      return {
        locale: routing.defaultLocale,
        messages,
      }
    }

    console.log(
      '✅ Valid locale:',
      locale
    )

    const messages = (
      await import(
        `../../messages/${locale}.json`
      )
    ).default

    console.log(
      `📚 Loaded messages/${locale}.json`
    )

    console.log('────────────────────────────────')
    console.log('🟢 REQUEST CONFIG END')

    return {
      locale,
      messages,
    }
  }
)