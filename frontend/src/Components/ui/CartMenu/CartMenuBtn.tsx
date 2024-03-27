'use client'

import { useContext } from 'react'
import { CartContext } from '@/Components/context/AppContext'

export const CartMenuBtn = ({text1, text2}:{text1:string, text2:string}) => {
    const [isCartOpen, setIsCartOpen] = useContext(CartContext)

    return (
        <button
            className="bg-customPink p-[5px]"
            onClick={() => {
                setIsCartOpen((state) => !state)
            }}
        >
            {isCartOpen ? <></> : <span>{text1}</span>}
            {!isCartOpen ? <></> : <span>{text2}</span>}
        </button>
    )
}
