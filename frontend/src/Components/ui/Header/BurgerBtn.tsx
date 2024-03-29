'use client'

import { useContext } from 'react'

import { BurgerContext, CatalogContext } from '@/Components/context/AppContext'
import { IoIosMenu } from 'react-icons/io'


const BurgerBtn = () => {
  const [isOpen, setIsOpen] = useContext(BurgerContext)
  const [visibleCatalog, setVisibleCatalog] = useContext(CatalogContext)
  return (
    <button
      className=" lg:hidden lg:order-last z-30"
      onClick={() => {
        setIsOpen((state) => !state)
        if (visibleCatalog) {
          setVisibleCatalog(false)
        }
      }}
    >
      {isOpen ? (
        <></>
      ) : (
        <IoIosMenu style={{ fontSize: '30px', color: '#D32B82' }} />
      )}
    </button>
  )
}

export default BurgerBtn
