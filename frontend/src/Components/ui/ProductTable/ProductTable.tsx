'use client'
import { selectCart } from '@/lib/features/cart/cart'
import { Product } from '../Product/Product'
import { useAppSelector } from '@/lib/hooks'
import { CartItem } from '@/type/interfaceCart'
import React from 'react'

export const ProductTable = () => {
    const { totalPrice, items } = useAppSelector(selectCart)
    const totalCount = items.reduce(
        (sum: number, item: any) => sum + item.count,
        0,
    )
    return (
        <div className="max-w-[858px]">
            <>
                <div className=" border-b-2 border-customPink hidden sm:flex">
                    <span className="w-[25%] text-center text-lg font-semibold py-2 ml-11">товар</span>
                    <span className="w-[25%] text-center text-lg font-semibold py-2 ml-11">цена</span>
                    <span className="w-[25%] text-center text-lg font-semibold py-2 ml-14">количество</span>
                    <span className="w-[25%] text-right text-lg font-semibold py-2">подытог</span>
                </div>
                <div className="flex flex-col gap-10">
                    {items.map((obj: CartItem) => (
                        <Product key={obj.id} {...obj} />
                    ))}
                </div>
            </>
        </div>
    )
}
