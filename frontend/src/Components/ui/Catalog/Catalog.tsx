'use client'
import React, { useEffect } from 'react'
import { Slider, Switch } from 'antd'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import { fetchCategories } from '@/lib/features/categories/categories'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Catalog() {
    const dispatch = useAppDispatch()
    const categories = useAppSelector(
        (state: RootState) => state.categories.posts,
    ) as any
    const categoriesArray = Array.from(categories) as {
        title: string
        items: number
    }[]
    const titles = categoriesArray.map((category) => category.title)
    const itemsCount = categoriesArray.map((category) => category.items)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])
    return (
        <div className="w-80 flex justify-center">
            <div className="flex justify-start flex-col mt-14 mb-8 mr-3">
                <p className="text-base">Цена</p>
                <div className="w-52">
                    <Slider
                        range
                        defaultValue={[1000, 10000]}
                        step={100}
                        max={12000}
                    />
                </div>
                <h1 className="text-3xl mt-5">Каталог</h1>
                <div className="flex flex-col gap-3 mt-5">
                    {categoriesArray.length > 0 ? (
                        categoriesArray.map((category, id) => (
                            <div className="flex justify-between w-60" key={id}>
                                <div>{category.title}</div>
                                <div className="border-solid flex justify-center w-10 border-2 rounded-full border-[#D32B82]">
                                    <p>{category.items}</p>
                                </div>
                            </div>
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
    )
}
