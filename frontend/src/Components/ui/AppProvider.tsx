'use client'

import { FC, PropsWithChildren, useState } from 'react'

import {
    BurgerContext,
    CartContext,
    CatalogContext,
    ModalContext,
} from '../context/AppContext'

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)
    const [visibleCatalog, setVisibleCatalog] = useState<boolean>(false)
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

    return (
        <ModalContext.Provider value={[visible, setVisible]}>
            <BurgerContext.Provider value={[isOpen, setIsOpen]}>
                <CatalogContext.Provider
                    value={[visibleCatalog, setVisibleCatalog]}
                >
                    <CartContext.Provider value={[isCartOpen, setIsCartOpen]}>
                        {children}
                    </CartContext.Provider>
                </CatalogContext.Provider>
            </BurgerContext.Provider>
        </ModalContext.Provider>
    )
}

export default AppProvider
