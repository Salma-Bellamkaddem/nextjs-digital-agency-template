import { ReactElement } from 'react'

declare global {
  interface IMenu {
    label: string
    path: string
    sectionId?: string | null
    icon?: ReactElement
  }
}

export {}
