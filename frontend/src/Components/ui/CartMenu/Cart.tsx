import clsx from 'clsx'
import React, { FC, useContext, useEffect, useRef } from 'react'
import { CartContext } from '@/Components/context/AppContext'
import Image from 'next/image'
import Close from '@/assets/close.svg'

const Cart: FC = () => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useContext(CartContext)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const cartClasses = clsx(
    'ease-in-out duration-300 ml-6',
    'bg-[gray] fixed top-0 right-0 h-screen w-[45%] flex',
    'w-auto lg:order-2 lg:max-w-auto z-30 p-[30px_25px]',
    isCartMenuOpen ? 'translate-x-0 ' : 'translate-x-full',
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsCartMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef, setIsCartMenuOpen])
  return (
    <div className={cartClasses} id="mobile-menu-2" ref={menuRef}>
      <div className="flex flex-col">
        <div className="flex items-center w-[auto] justify-between gap-[36px]">
          <h3 className="font-montserrat text-[20px] font-medium">
            SHOPPING CART
          </h3>
          <div
            className="flex items-center gap-[9px] cursor-pointer select-none"
            onClick={() => setIsCartMenuOpen(false)}
          >
            <span className="font-light">CLOSE</span>
            <span>
              <Image src={Close} alt="close" />
            </span>
          </div>
        </div>
        <div className="block mt-[9px] -ml-[25px] -mr-[25px]">
          <div className="border border-customPink w-[100%]" />
        </div>
      </div>
    </div>
  )
}

export default Cart
