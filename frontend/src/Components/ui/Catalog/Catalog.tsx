'use client'
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
            <h1 className="text-3xl">Каталог</h1>
            <div className='flex flex-col gap-3 mt-5'>
                {categoriesArray.length > 0
                    ? categoriesArray.map((category) => (
                          <div className='flex justify-between w-48'>
                              <div>{category.title}</div>
                              <div className='border-solid flex justify-center w-7 border-2 rounded-full border-indigo-600'>{category.items}</div>
                          </div>
                      ))
                    : ''}
            </div>
        </div>
    )
}
