

declare global {
  interface IMenu {
    labelKey: string

    path: string
  
    sectionId?: string | null
  
    icon: React.ReactNode
  }
}

export {}
