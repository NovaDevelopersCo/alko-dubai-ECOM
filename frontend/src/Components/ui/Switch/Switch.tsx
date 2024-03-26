'use client'

import { useState } from 'react'
import clsx from 'clsx'

export const Switch = ({
    openMenu,
    handleMenu,
    openCatalog,
    handleCatalog,
}: {
    openMenu: boolean
    handleMenu: () => void
    openCatalog: boolean
    handleCatalog: () => void
}) => {
    const toggleClasses = clsx(
        'p-[5px_15px] w-full text-center lg:p-[5px_36px] md:p-[5px_25px] sm:p-[5px_15px] cursor-pointer transition-all duration-300 select-none',
    )

    return (
        <div className="border border-customPink grid w-full grid-cols-2">
            <label
                className={
                    openCatalog
                        ? `${toggleClasses} bg-customPink text-[#fff]`
                        : `${toggleClasses}`
                }
            >
                <input
                    onChange={handleCatalog}
                    type="radio"
                    name="switch"
                    className="cursor-pointer w-0 h-0"
                />
                <span className="cursor-pointer font-literata">КАТАЛОГ</span>
            </label>
            <label
                className={
                    openMenu
                        ? `${toggleClasses} bg-customPink text-[#fff]`
                        : `${toggleClasses}`
                }
            >
                <input
                    onChange={handleMenu}
                    type="radio"
                    name="switch"
                    className="cursor-pointer w-0 h-0"
                />
                <span className="cursor-pointer font-literata">МЕНЮ</span>
            </label>
        </div>
    )
}
