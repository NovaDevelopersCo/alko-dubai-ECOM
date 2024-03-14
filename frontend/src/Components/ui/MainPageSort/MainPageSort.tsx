import React from 'react'
import clsx from 'clsx'
function MainPageSort() {
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
        <div className="text-center">
            <h1 className="uppercase text-xl md:text-2xl p-8">Популярные Товары</h1>
            <div className="pointer flex justify-center">
                <ul className="flex px-10 font-medium lg:flex-row lg:space-x-8 mt-0">
                    <li className="relative group">
                        <span
                            className="px-3 text-sm lg:text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700"
                            aria-current="page"
                        >
                            хит продаж
                        </span>
                        <span className={clsx(underlineClasses)}></span>
                    </li>
                    <li className="relative group">
                        <span
                            className="px-3 text-sm lg:text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700"
                            aria-current="page"
                        >
                            новинки
                        </span>
                        <span className={clsx(underlineClasses)}></span>
                    </li>
                    <li className="relative group">
                        <span
                            className="px-3 text-sm lg:text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700"
                            aria-current="page"
                        >
                            скидки
                        </span>
                        <span className={clsx(underlineClasses)}></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainPageSort
