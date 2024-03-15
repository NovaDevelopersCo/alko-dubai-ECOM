'use client'

import { useContext } from 'react'
import { CartMenuBtn } from './CartMenuBtn'
import { CartContext } from '@/Components/context/AppContext'
import React from 'react'
import Cart from './Cart'

export const CartMenu = () => {
  const [isCartOpen, setIsCartOpen] = useContext(CartContext)
  React.useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add('fixed')
    } else {
      document.body.classList.remove('fixed')
    }
    return () => {
      document.body.classList.remove('fixed')
    }
  }, [isCartOpen])

  return (
    <div>
      <Cart />
      <CartMenuBtn />
    </div>
  )
}
