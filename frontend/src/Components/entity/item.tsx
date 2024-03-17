'use client'
import React, { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchItems, selectItems } from '@/lib/features/items/items'
import { InputFetch, item } from '@/type/interface'

import Link from 'next/link'
import clsx from 'clsx'
import { Pagination } from 'antd'
// Компонент Item

export function Item({
    title,
    category,
    price,
    image,
    id,
    oldPrice,
    sale,
}: item) {
    console.log(title)
    return (
        <div className="col-span-1 p-4 rounded-md hover:shadow-md">
            <Link href={`/store/${id}`} key={id}>
                <article>
                    <figure>
                        {image && (
                            <img
                                src={image}
                                alt="png"
                                className="w-full h-auto rounded-md"
                            />
                        )}
                    </figure>
                    <div className="mt-4 text-center">
                        <span className="text-sm mb-2">{category} </span>
                        <span className="opacity-70 text-sm">{title}</span>
                        <p className="font-bold text-customPink ">
                            {oldPrice && oldPrice > price ? (
                                <span className="text-sm font-bold line-through text-customGray ">
                                    {oldPrice} AED
                                </span>
                            ) : (
                                ''
                            )}

                            {price}
                            <span className="text-sm"> AED</span>
                        </p>
                    </div>
                </article>
            </Link>
        </div>
    )
}
