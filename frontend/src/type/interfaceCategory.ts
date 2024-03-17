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