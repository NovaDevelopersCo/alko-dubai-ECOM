'use client'
import React, { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchItems, selectItems } from '@/lib/features/items/items'
import { InputFetch } from '@/type/interface'

import Link from 'next/link'
import Image from 'next/image'
// Компонент Item 
export function Item({ disabled: disabled }: { disabled: boolean }) { // eslint-disable-line no-unused-vars 
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectItems).items
    const pages = useAppSelector(selectItems).totalPages // eslint-disable-line no-unused-vars 
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
        <ul className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items &&
                Array.isArray(items) &&
                items.map((product) => (
                    <Link
                        href={`/store/${product.id}`}
                        key={product.id}
                        className=" p-4 rounded-md hover:shadow-md"
                    >
                        <article>
                            <figure>
                                {product.image && (
                                    <Image
                                        src={product.image}
                                        alt="png"
                                        className="w-full h-auto rounded-md"
                                        layout="responsive"
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
                ))}
        </ul>
    )
}
