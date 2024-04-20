
'use client'
import clsx from 'clsx'

export const Switch = ({
                           activeTab,
                           handleTabChange,
                       }: {
    activeTab: 'menu' | 'catalog'
    handleTabChange: (tab: 'menu' | 'catalog') => void
}) => {
    const toggleClasses = clsx(
        'p-[5px_15px] w-full text-center lg:p-[5px_36px] md:p-[5px_25px] sm:p-[5px_15px] cursor-pointer transition-all duration-300 select-none'
    )

    return (
        <div className="border border-customPink grid w-full grid-cols-2">
            <label
                className={clsx(
                    toggleClasses,
                    activeTab === 'catalog' ? 'bg-customPink text-[#fff]' : ''
                )}
                onClick={() => handleTabChange('catalog')}
            >
                <span className="cursor-pointer font-literata">КАТАЛОГ</span>
            </label>
            <label
                className={clsx(
                    toggleClasses,
                    activeTab === 'menu' ? 'bg-customPink text-[#fff]' : ''
                )}
                onClick={() => handleTabChange('menu')}
            >
                <span className="cursor-pointer font-literata">МЕНЮ</span>
            </label>
        </div>
    )
}
