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
  item: item | null;
}

export type category = {
  title: string
  image?: string
  items: number
}

export type categories = {
  title: string
  image?: string
  items: number
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

export type PriceSort = 'asc' | 'desc'

export interface InputFetch {
  price: PriceSort
  popularity: boolean
  news: boolean
  max_price: number
  min_price: number
}
