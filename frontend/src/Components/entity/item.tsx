'use client'
import React, { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchItems, selectItems } from '@/lib/features/items/items'
import { InputFetch } from '@/type/interface'
import { Pagination } from 'antd'
import clsx from 'clsx'

export function Item({ disabled: disabled }: { disabled: boolean }) {
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectItems).items
    const pages = useAppSelector(selectItems).totalPages
    const inputFetch: InputFetch = useMemo(
        () => ({
            price: 'asc',
            popularity: true,
            news: true,
            max_price: 12000,
            min_price: 0,
        }),
        [],
    )
    useEffect(() => {
        dispatch(fetchItems(inputFetch))
    }, [dispatch, inputFetch])
    return (
        <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items &&
                    Array.isArray(items) &&
                    items.map((product) => (
                        <li
                            key={product.id}
                            className="border p-4 rounded-md shadow-md"
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
                                <div className="mt-4">
                                    <h1 className="text-lg font-semibold mb-2">
                                        {product.title}
                                    </h1>
                                    <p className="text-sm mb-2">
                                        {product.description}
                                    </p>
                                    <p className="text-xl font-bold text-blue-500">
                                        ${product.price}
                                    </p>
                                    {/* Add a button if necessary */}
                                </div>
                            </article>
                        </li>
                    ))}
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
