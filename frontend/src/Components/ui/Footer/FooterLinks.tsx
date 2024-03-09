import React from 'react'
import Link from "next/link";

function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
        <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
          Ассортимент
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <Link href="/store" className="hover:underline">
              Магазин
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Каталог
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
          Информация
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <Link href="/company" className="hover:underline ">
              О Компании
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
          Доставка
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <Link href="/" className="hover:underline">
              Доставка и Оплата
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterLinks
