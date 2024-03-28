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

export type order = {
    items: items[]
    name: string
    email: string
    phone: string
    details: string
    price: number
    address: string
    createdAt?: Date
    updatedAt?: Date
}

export interface orderStateProps {
    order: order
    error: object | string | null
    success: object | string | null
    isLoading: boolean
}
