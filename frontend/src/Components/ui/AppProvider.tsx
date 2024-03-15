'use client'

import { FC, PropsWithChildren, useState } from 'react'

import { BurgerContext, CartContext, ModalContext } from '../context/AppContext'

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

  return (
    <ModalContext.Provider value={[visible, setVisible]}>
      <BurgerContext.Provider value={[isOpen, setIsOpen]}>
        <CartContext.Provider value={[isCartOpen, setIsCartOpen]}>
          {children}
        </CartContext.Provider>
      </BurgerContext.Provider>
    </ModalContext.Provider>
  )
}

export default AppProvider
