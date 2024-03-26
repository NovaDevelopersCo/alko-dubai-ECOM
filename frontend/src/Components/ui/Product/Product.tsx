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

export const Product = ({
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
        <div className="flex items-center border-b-[1px] pr-6 border-customPink border-none lg:border-solid md:border-solid sm:border-none">
            <Image
                className="cursor-pointer hidden lg:block md:block sm:hidden"
                src={'/close.svg'}
                alt={'delete'}
                width={15}
                height={15}
                onClick={onClickRemove}
            />
            <img src={image} alt={title} width={105} height={122} />
            <div className="grid lg:flex md:flex sm:grid grid-cols-1 justify-between w-[100%] flex-wrap">
                <div className="flex items-top justify-between py-[7px]">
                    <span className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] font-semibold max-w-[185px] lg:max-w-[100%] md:max-w-[100%] sm:max-w-[185px]">
                        {title}
                    </span>
                    <span
                        onClick={onClickRemove}
                        className="text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] inline lg:hidden md:hidden sm:inline justify-between font-semibold cursor-pointer"
                    >
                        <img src="/close.svg" alt="close" />
                    </span>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-customPink border-dashed lg:border-none md:border-none sm:border-dashed py-[2px]">
                    <span className="text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] inline lg:hidden md:hidden sm:inline font-semibold">
                        цена
                    </span>
                    <span className="font-medium lg:font-semibold md:font-semibold sm:font-medium  text-[#878787] text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px]">
                        {oldPrice && oldPrice > price ? (
                            <span className="font-medium line-through pr-1 lg:font-semibold md:font-semibold sm:font-medium  text-[#878787] text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] ">
                                {oldPrice} AED
                            </span>
                        ) : (
                            ''
                        )}
                        {price} AED
                    </span>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-customPink border-dashed lg:border-none md:border-none sm:border-dashed py-[2px]">
                    <span className="text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] inline lg:hidden md:hidden sm:inline justify-between font-semibold">
                        количество
                    </span>
                    <Counter
                        value={count}
                        increment={onClickPlus}
                        decrement={count > 1 ? onClickMinus : onClickRemove}
                    />
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-customPink border-dashed lg:border-none md:border-none sm:border-dashed py-[7px]">
                    <span className="text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] inline lg:hidden md:hidden sm:inline font-semibold">
                        подытог
                    </span>
                    <span className="font-semibold text-customPink text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px]">
                        {price * count} AED
                    </span>
                </div>
            </div>
        </div>
    )
}
