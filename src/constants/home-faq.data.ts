import { ReactElement } from 'react'

export type FaqIconKey = 'clock' | 'globe' | 'document' | 'rocket' | 'headset'

export interface IFaqItem {
  id: string
  key: string
  icon: FaqIconKey
}

export const FAQ_ITEMS: IFaqItem[] = [
  {
    id: 'faq-delay',
    key: 'delay',
    icon: 'clock',
  },
  {
    id: 'faq-services',
    key: 'services',
    icon: 'globe',
  },
  {
    id: 'faq-pricing',
    key: 'pricing',
    icon: 'document',
  },
  {
    id: 'faq-tracking',
    key: 'tracking',
    icon: 'rocket',
  },
  {
    id: 'faq-support',
    key: 'support',
    icon: 'headset',
  },
]