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

export const ProductMini = ({
                                id,
                                title,
                                price,
                                count,
                                image,
                                sale,
                                oldPrice,
                            }: CartItem) => {
    const dispatch = useAppDispatch()
    const { totalPrice } = useAppSelector(selectCart)
    const onClickPlus = useCallback(() => {
        dispatch(
            addItem({
                id,
                price,
                count,
                sale,
                oldPrice,
            }),
        )
    }, [dispatch, id, price, count, sale, oldPrice])

    const onClickMinus = useCallback(() => {
        dispatch(minusItem(id))
    }, [dispatch, id])

    const onClickRemove = useCallback(() => {
        if (window.confirm('Удалить это?')) {
            dispatch(removeItem(id))
        }
    }, [dispatch, id])

    return (
        <div className="flex items-center pr-6 my-5">
            <div className="mx-2">
                <Image
                    className="cursor-pointer hidden lg:block md:block sm:hidden"
                    src={'/close.svg'}
                    alt={'delete'}
                    width={15}
                    height={15}
                    onClick={onClickRemove}
                />
            </div>
            <img src={image} alt={title} width={75} height={90}/>
            <div className="grid  lg:flex md:flex sm:grid grid-cols-1 justify-between w-[100%] flex-wrap">
                <div className="flex items-top justify-between py-[7px]">
                    <span
                        className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] font-semibold max-w-[185px] lg:max-w-[100%] md:max-w-[100%] sm:max-w-[185px]">
                        {title}
                    </span>
                    <span
                        onClick={onClickRemove}
                        className="text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] inline lg:hidden md:hidden sm:inline justify-between font-semibold cursor-pointer"
                    >
                        <img src="/close.svg" alt="close"/>
                    </span>
                </div>

                <div
                    className="flex items-center justify-between py-[2px]">
                    <span
                        className=" font-medium lg:font-semibold md:font-semibold sm:font-medium  text-[#878787] text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px]">
                       {count} x
                    </span>
                </div>
                <div
                    className="flex items-center justify-betwee py-[7px]">
                    <span
                        className="font-semibold text-customPink text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px]">
                        {price} AED
                    </span>
                </div>
            </div>
        </div>
    )
}
