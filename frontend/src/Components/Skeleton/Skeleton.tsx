import React from 'react'

export default function Skeleton() {
    return (
        <div className="embla__slide min-w-0 rounded-md shadow-inset-0.2rem flex-0 items-center justify-center rounded-1.8rem flex-shrink-0 w-1/2 px-2 sm:w-1/4 lg:w-1/6 xl:w-1/8 mt-3">
            <img
                className="w-full h-auto rounded-md"
                src="https://e7.pngegg.com/pngimages/804/985/png-clipart-wine-glass-bottle-product-blueberry-hill-rose-glass-wine.png"
            />
            <p className="embla__slide__number p-2 text-xs sm:text-xs md:text-sm xl:text-base font-semibold text-center">
                Категория
            </p>
        </div>
    )
}

