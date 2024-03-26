'use client'
import React from 'react'


import Link from 'next/link'
import { item } from '@/type/interfaceItems'
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
    return (
        <div className="col-span-1 p-4 rounded-md hover:shadow-md">
            <Link href={`/store/${id}`} key={id}>
                <article>
                    <figure className="flex justify-center">
                        {image && (
                            <img
                                src={image}
                                alt="png"
                                className="rounded-md w-32 min-w-32 h-60"
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
