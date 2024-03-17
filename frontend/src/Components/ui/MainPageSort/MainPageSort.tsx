import React, { useState, useEffect } from 'react'
import {
    selectFilter,
    setPopularity,
    setNews,
    setSale,
} from '@/lib/features/filter/filter'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

function MainPageSort() {
    const [activeCategory, setActiveCategory] = useState('popularity')

    const dispatch = useAppDispatch()
    const { popularity, news, sale } = useAppSelector(selectFilter)

    useEffect(() => {
        dispatch(setPopularity(true)) // Устанавливаем фильтр по популярности по умолчанию
    }, [dispatch])

    const handlePopularityChange = () => {
        if (!popularity) {
            dispatch(setPopularity(!popularity))
            dispatch(setNews(false)) // Сбрасываем выбор других категорий
            dispatch(setSale(false))
            setActiveCategory('popularity')
        }
    }

    const handleNewsChange = () => {
        if (!news) {
            dispatch(setNews(!news))
            dispatch(setPopularity(false)) // Сбрасываем выбор других категорий
            dispatch(setSale(false))
            setActiveCategory('news')
        }
    }


    const handleSaleChange = () => {
        if (!sale) {
            dispatch(setSale(!sale))
            dispatch(setPopularity(false)) // Сбрасываем выбор других категорий
            dispatch(setNews(false))
            setActiveCategory('sale')
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="mx-4 md:mx-16 flex">
                <div
                    className={clsx(
                        'block cursor-pointer mr-4',
                        popularity && 'disabled',
                        activeCategory === 'popularity' && 'active',
                    )}
                    onClick={handlePopularityChange}
                >
                    <span
                        className={clsx('checkbox', { checked: popularity })}
                    ></span>
                    <span
                        className={clsx(' md:mx-10 text-base md:text-lg', {
                            'checked-text': popularity,
                        })}
                    >
                        хит продаж
                    </span>
                    <span
                        className={clsx(
                            'absolute h-0.5 bg-customPink bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300',
                            { 'w-full': activeCategory === 'popularity' },
                        )}
                    ></span>
                </div>
                <div
                    className={clsx(
                        'block cursor-pointer mr-4',
                        news && 'disabled',
                        activeCategory === 'news' && 'active',
                    )}
                    onClick={handleNewsChange}
                >
                    <span
                        className={clsx('checkbox', { checked: news })}
                    ></span>
                    <span
                        className={clsx(' md:mx-10 text-base md:text-lg', {
                            'checked-text': news,
                        })}
                    >
                        новинки
                    </span>
                    <span
                        className={clsx(
                            'absolute h-0.5 bg-customPink bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300',
                            { 'w-full': activeCategory === 'news' },
                        )}
                    ></span>
                </div>
                <div
                    className={clsx(
                        'block cursor-pointer',
                        sale && 'disabled',
                        activeCategory === 'sale' && 'active',
                    )}
                    onClick={handleSaleChange}
                >
                    <span
                        className={clsx('checkbox', { checked: sale })}
                    ></span>
                    <span
                        className={clsx(' md:mx-10 text-base md:text-lg', {
                            'checked-text': sale,
                        })}
                    >
                        скидки
                    </span>
                    <span
                        className={clsx(
                            'absolute h-0.5 bg-customPink bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300',
                            { 'w-full': activeCategory === 'sale' },
                        )}
                    ></span>
                </div>
            </div>
        </div>
    )
}

export default MainPageSort
