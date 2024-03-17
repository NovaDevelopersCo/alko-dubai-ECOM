export type PriceSort = 'asc' | 'desc'

export interface InputFetch {
  price?: PriceSort
  popularity?: boolean
  news?: boolean
  sale?:boolean
  max_price?: number
  min_price?: number
  currentPage?: number
  limit?: number
}
