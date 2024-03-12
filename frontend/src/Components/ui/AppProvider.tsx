'use client'

import { FC, PropsWithChildren, useState } from 'react'

import { BurgerContext, CatalogContext, ModalContext } from '../context/AppContext'

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [visible, setVisible] = useState<boolean>(false)
	const [visibleContext, setVisibleContext] = useState<boolean>(false)

    return (
        <ModalContext.Provider value={[visible, setVisible]}>
            <BurgerContext.Provider value={[isOpen, setIsOpen]}>
                <CatalogContext.Provider value={[visibleContext, setVisibleContext]}>
                    {children}
                </CatalogContext.Provider>
            </BurgerContext.Provider>
        </ModalContext.Provider>
    )
}

export default AppProvider
