import clsx from 'clsx'
import Link from 'next/link'
import React, { FC, useContext, useEffect, useRef } from 'react'
import { BurgerContext } from '@/Components/context/AppContext'

interface NavLink {
  name: string
  href: string
}

const Links: NavLink[] = [
  {
    name: 'Главная',
    href: '/',
  },
  {
    name: 'Магазин',
    href: 'store',
  },
  {
    name: 'Доставка и оплата',
    href: '/',
  },
  {
    name: 'О компании',
    href: '/company',
  },
  {
    name: 'Контакты',
    href: '/contact',
  },
]

const HeaderLinks: FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useContext(BurgerContext)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const underlineClasses = clsx(
    'absolute',
    'h-0.5',
    'bg-customPink',
    'bottom-0',
    'left-0',
    'w-0',
    'group-hover:w-full',
    'transition-all',
    'duration-300',
  )

  const navClasses = clsx(
    'ease-in-out duration-300 ml-6',
    'bg-customBlack fixed top-0 right-0 h-screen w-[80%] flex items-center justify-center',
    'lg:bg-transparent lg:relative lg:h-auto lg:w-auto lg:order-2 lg:max-w-auto lg:block lg:translate-x-0 z-30',
    isBurgerOpen ? 'translate-x-0 ' : 'translate-x-full ',
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsBurgerOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef, setIsBurgerOpen])
  return (
    <div className={navClasses} id="mobile-menu-2" ref={menuRef}>
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
<<<<<<< HEAD
        <li className="relative group">
          <a
            href="/"
            className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
            aria-current="page"
          >
            Главная
          </a>
          <span className={underlineClasses}></span>
        </li>
        <li className="relative group">
          <a
            href="store"
            className="block py-2 pr-4 pl-3 text-black border-b  border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0  "
          >
            Магазин
          </a>
          <span className={underlineClasses}></span>
        </li>
        <li className="relative group">
          <a
            href="/delivery"
            className="block py-2 pr-4 pl-3 text-black border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
          >
            Доставка и оплата
          </a>
          <span className={underlineClasses}></span>
        </li>
        <li className="relative group">
          <Link
            href="/company"
            className="block py-2 pr-4 pl-3 text-black border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
          >
            О компании
          </Link>
          <span className={underlineClasses}></span>
        </li>
        <li className="relative group">
          <Link
            href="/contact"
            className="block py-2 pr-4 pl-3 text-black border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
          >
            Контакты
          </Link>
          <span className={underlineClasses}></span>
        </li>
=======
        {Links.map((link, index) => (
          <li className="relative group" key={index}>
            <a
              href={link.href}
              className="block py-2 pr-4 pl-3 text-white lg:text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
              aria-current="page"
              onClick={() => {
                setIsBurgerOpen(false)
              }}
            >
              {link.name}
            </a>
            <span  className={clsx(!isBurgerOpen && underlineClasses)}></span>
          </li>
        ))}
>>>>>>> 35582a166cd20d81bdecff2c05250b60adeab92a
      </ul>
    </div>
  )
}

export default HeaderLinks
