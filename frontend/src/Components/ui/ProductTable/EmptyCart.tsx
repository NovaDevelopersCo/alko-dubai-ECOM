import Link from 'next/link'
import React from 'react'

function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-center">
                <span className="text-lg md:text-2xl font-semibold mb-4">
                    В корзине пока пусто
                </span>
                <p className="m-4 md:text-lg opacity-80">
                    Загляните в магазин, чтобы выбрать товары или найдите нужное
                    в поиске.
                </p>
            </div>
            <Link
                className="p-2 rounded-md text-montserrat text-white border border-customPink bg-customPink hover:scale-105 transition-all"
                href="/store"
            >
                Перейти на главную
            </Link>
        </div>
    )
}

export default EmptyCart
