'use client'
import React, { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchItems, selectItems } from '@/lib/features/items/items'
import { InputFetch } from '@/type/interface'

import Link from 'next/link'
import clsx from 'clsx'
import { Pagination } from 'antd'
// Компонент Item
export function Item({ disabled: disabled }: { disabled: boolean }, { title,category, price, image, id, oldPrice }) {
    // const dispatch = useAppDispatch()
    // const items = useAppSelector(selectItems).items
    // const pages = useAppSelector(selectItems).totalPages
    // const inputFetch: InputFetch = useMemo(
    //     () => ({
    //         price: 'desc',
    //         popularity: false,
    //         news: false,
    //         max_price: 12000,
    //         min_price: 0,
    //         currentPage:0,
    //     }),
    //     [],
    // )

    // const inputFetch: InputFetch = async () => {
    //     const price = 'desc'
    //     const popularity = false
    //     const news = false
    //     const max_price = 12000
    //     const min_price = 0
    //     const currentPage = 0
    //     const limit = 100

    //     dispatch(
    //         fetchItems({
    //             price,
    //             popularity,
    //             news,
    //             max_price,
    //             min_price,
    //             currentPage,
    //             limit,
    //         }),
    //     )
    // }

    // useEffect(() => {
    //     dispatch(fetchItems(inputFetch))
    // }, [dispatch, inputFetch])
    return (
        <div>
            <ul className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Link
                    href={`/store/${product.id}`}
                    key={product.id}
                    className=" p-4 rounded-md hover:shadow-md"
                >
                    <article>
                        <figure>
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt="png"
                                    className="w-full h-auto rounded-md"
                                />
                            )}
                        </figure>
                        <div className="mt-4 text-center">
                            <span className="text-sm mb-2">
                                {product.category}{' '}
                            </span>
                            <span className="opacity-70 text-sm">
                                {product.title}
                            </span>
                            <p className=" font-bold text-customPink ">
                                {product.oldPrice > 0 && (
                                    <span className="text-sm font-bold line-through text-customGray ">
                                        {product.oldPrice}
                                        <span> AED </span>
                                    </span>
                                )}
                                {product.price}
                                <span className="text-sm"> AED</span>
                            </p>
                        </div>
                    </article>
                </Link>
            </ul>
            <div className="mt-6">
                <div
                    className={clsx(['w-full mt-6', disabled ? 'hidden' : ''])}
                >
                    <Pagination
                        className="text-center"
                        showSizeChanger={false}
                        pageSize={items ? Object.keys(items).length / pages : 2}
                        total={items ? Object.keys(items).length : 2}
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    )
}
