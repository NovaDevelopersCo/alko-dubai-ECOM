export type CartItem = {
    id: number;
    title: string
    price: number
    category: string
    oldPrice: number
    image: string
    count: number
    sale: boolean
    soldOut: boolean
}

export interface CartSliceStateProps {
    totalPrice: number
    totalSale: number
    items: CartItem[]
}
