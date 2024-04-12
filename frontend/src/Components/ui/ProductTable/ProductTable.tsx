'use client'
import { selectCart } from '@/lib/features/cart/cart'
import { Product } from '../Product/Product'
import { useAppSelector } from '@/lib/hooks'
import { CartItem } from '@/type/interfaceCart'
import React from 'react'

export const ProductTable = () => {
    const { items } = useAppSelector(selectCart)
    return (
        <div className="max-w-[858px]">
            <>
                <div className=" border-b-2 border-customPink hidden lg:grid md:grid sm:hidden grid-cols-3 pr-3">
                    <span className="text-center text-lg font-semibold mr-[20px]">
                        товар
                    </span>
                    <span className="grid grid-cols-2">
                        <span className="text-right text-lg font-semibold ml-[70px] productTable-price-response pr-[40px]">
                            цена
                        </span>
                        <span className="text-right text-lg font-semibold pl-[150px] productTable-quantity-response -ml-[15px]">
                            количество
                        </span>
                    </span>
                    <span className="text-right text-lg font-semibold ml-[0px]">
                        подытог
                    </span>
                </div>
                <div className="flex flex-col">
                    {items.map((obj: CartItem) => (
                        <Product key={obj.id} {...obj} />
                    ))}
                </div>
            </>
        </div>
    )
}
