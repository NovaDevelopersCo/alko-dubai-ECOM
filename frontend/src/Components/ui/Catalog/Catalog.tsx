"use client"
import React, { useEffect } from 'react'
import { Slider, Switch } from 'antd'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import { fetchCategories } from '@/lib/features/categories/categories'

export default function Catalog() {
    const dispatch = useAppDispatch()
    const categories = useAppSelector(
        (state: RootState) => state.categories.posts,
    ) as any
    const categoriesArray = Array.from(categories) as { title: string }[]
    const titles = categoriesArray.map((category) => category.title)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])
    return (
        <div className="w-80 pl-6 flex justify-center flex-col mt-20">
            <p>Цена</p>
            <div className="w-52">
                <Slider
                    range
                    defaultValue={[1000, 10000]}
                    step={100}
                    max={12000}
                />
            </div>
            <h1>Каталог</h1>
        </div>
    )
}
