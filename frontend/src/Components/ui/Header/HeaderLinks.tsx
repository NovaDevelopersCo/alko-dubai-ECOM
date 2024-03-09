import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

function HeaderLinks() {
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
  return (
    <div
      className="hidden justify-between items-center w-full lg:flex lg:w-auto "
      id="mobile-menu-2"
    >
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
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
      </ul>
    </div>
  )
}

export default HeaderLinks
