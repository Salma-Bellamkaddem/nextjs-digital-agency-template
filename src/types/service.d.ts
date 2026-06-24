declare global {
  interface IService {
    id: number
    title: string
    slug: string
    description: string
    icon?: ReactElement
    subServices?: string[]   // ← ajoute cette ligne

    image?: string
  }
}

export {}
