'use client'
import { Counter } from '@/Components/ui/Counter/Counter'
import React, { useCallback, useEffect } from 'react'
import Image from 'next/image'
import { CartItem } from '@/type/interfaceCart'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import {
    addItem,
    minusItem,
    removeItem,
    selectCart,
} from '@/lib/features/cart/cart'

export const CheckProduct = ({
                                title,
                                price,
                                count,
                            }: CartItem) => {
    return (
        <div className="flex items-center pr-6 my-5">
            <div className="grid  lg:flex md:flex sm:grid grid-cols-1 w-[100%] items-center flex-wrap">
                <div className="flex items-top justify-between py-[7px]">
                    <span
                        className="text-[14px] text-customPink mr-2 lg:text-[16px] md:text-[15px] sm:text-[14px] font-semibold max-w-[185px] lg:max-w-[100%] md:max-w-[100%] sm:max-w-[185px]">
                        {title}
                    </span>
                </div>

                <div
                    className="flex items-center py-[2px]">
                    <span
                        className=" font-medium lg:font-semibold md:font-semibold sm:font-medium text-customPink  text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px]">
                       ({count} шт)
                    </span>
                </div>
                <div
                    className="flex items-center ml-auto py-[7px]">
                    <span
                        className="font-semibold  text-[#878787] text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px]">
                        {price} AED
                    </span>
                </div>
            </div>
        </div>
    )
}
