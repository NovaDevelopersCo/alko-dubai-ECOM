export type items = {
  id: number
  title: string
  description: string
  image?: string
  category: string
  price: number
  oldPrice?: number
  viewsCount: number
  sale?: boolean
  soldOut?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type item = {
  id: number
  title: string
  description: string
  image?: string
  category: string
  price: number
  oldPrice?: number
  viewsCount: number
  sale?: boolean
  soldOut?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface itemsStateProps {
  posts: {
    items: items[]
    totalPages: number
  }
  error: object | string | null
  success: object | string | null
  isLoading: boolean
}

export type category = {
  title: string
  image?: string
}

export type categories = {
  title: string
  image?: string
}

export interface categoriesStateProps {
  posts: {
    categories: categories[]
  }
  error: object | string | null
  success: object | string | null
  isLoading: boolean
}

export interface DefaultRootStateProps {
  items: itemsStateProps
  categories: categoriesStateProps
}
