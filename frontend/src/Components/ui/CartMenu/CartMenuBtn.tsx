'use client'

import { useContext } from 'react'
import { CartContext } from '@/Components/context/AppContext'

export const CartMenuBtn = () => {
    const [isCartOpen, setIsCartOpen] = useContext(CartContext)

    return (
        <button
            className="bg-customPink p-[5px]"
            onClick={() => {
                setIsCartOpen((state) => !state)
            }}
        >
            {isCartOpen ? <></> : <span>Open Cart</span>}
            {!isCartOpen ? <></> : <span>Close Cart</span>}
        </button>
    )
}
