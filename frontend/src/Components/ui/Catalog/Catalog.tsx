'use client'
import React, { useContext, useEffect, useState } from 'react'
import { Slider } from 'antd'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import { fetchCategories } from '@/lib/features/categories/categories'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { CatalogContext } from '@/Components/context/AppContext'
import clsx from 'clsx'
import Link from 'next/link'
import { setMaxPrice, setMinPrice } from '@/lib/features/filter/filter'

export default function Catalog() {
    const [visibleCatalog, setVisibleCatalog] = useContext(CatalogContext)
    const [sliderValues, setSliderValues] = useState<number[]>([
        1, 1000,
    ])
    const dispatch = useAppDispatch()
    const categories = useAppSelector(
        (state: RootState) => state.categories.posts,
    ) as any
    const categoriesArray = Array.from(categories) as {
        title: string
        items: number
    }[]

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const handleSliderChange = (values: number[]) => {
        setSliderValues(values)
    }

    const handleFilterButtonClick = () => {
        dispatch(setMinPrice(sliderValues[0]))
        dispatch(setMaxPrice(sliderValues[1]))
    }

    return (
        <div
            className={clsx([
                'w-80',
                visibleCatalog
                    ? 'fixed top-0 left-0 z-[100] lg:static w-screen h-screen lg:w-auto lg:h-auto'
                    : '',
                visibleCatalog ? 'bg-[#2b2a2c49] lg:bg-transparent' : '',
                visibleCatalog ? 'lg:flex' : 'hidden',
            ])}
        >
            <div
                className={clsx([
                    'w-80 bg-white transition ease-in-out duration-1000',
                    'flex justify-center',
                    visibleCatalog
                        ? 'absolute h-screen lg:h-auto z-20 lg:static'
                        : '',
                    !visibleCatalog ? '-translate-x-80 ' : 'translate-x-0 ',
                    visibleCatalog ? 'lg:flex' : 'hidden',
                ])}
            >
                <div
                    className={clsx([
                        'flex justify-start flex-col lg:mt-14 mb-8 mr-10',
                        visibleCatalog ? 'mt-20' : '',
                    ])}
                >
                    <p className="text-base">Цена</p>
                    <div className="w-52">
                        <Slider
                            range
                            value={sliderValues}
                            onChange={(value) =>
                                handleSliderChange(value)
                            }
                            step={5}
                            defaultValue={[0, 1000]}
                            max={1000}
                        />
                    </div>
                    <button onClick={handleFilterButtonClick}>Фильтр</button>
                    <h1 className="text-3xl mt-5">Каталог</h1>
                    <div className="flex flex-col gap-3 mt-5">
                        {categoriesArray.length > 0 ? (
                            categoriesArray.map((category, id) => (
                                <Link
                                    href={`/store/catalog/${category.title}`}
                                    className="flex justify-between w-60"
                                    key={id}
                                >
                                    <div>{category.title}</div>
                                    <div className="border-solid flex justify-center w-10 border-2 rounded-full border-[#D32B82]">
                                        <p>{category.items}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="flex justify-between flex-col w-full">
                                <Skeleton
                                    width={250}
                                    height={30}
                                    count={7}
                                    className="block my-3"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
