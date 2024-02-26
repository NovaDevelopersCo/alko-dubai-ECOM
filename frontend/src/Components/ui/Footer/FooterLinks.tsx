import React from 'react'

function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Ассортимент
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Магазин
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Каталог
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Информация
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline ">
              О Компании
            </a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
              Контакты
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Доставка
        </h2>
        <ul className="text-gray-500 dark:text-gray-400 font-medium">
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Доставка и Оплата
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterLinks
