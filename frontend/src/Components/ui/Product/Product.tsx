'use client'
import { Counter } from '@/Components/ui/Counter/Counter'
import { useState } from 'react'
import Image from 'next/image'

export const Product = () => {
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="flex items-center border-b-[1px] pr-6 border-customPink border-none lg:border-solid md:border-solid sm:border-none">
            <Image
                className="cursor-pointer hidden lg:block md:block sm:hidden"
                src={'/close.svg'}
                alt={'delete'}
                width={15}
                height={15}
            />
            <Image
                src={'/whisky.png'}
                alt={'whisky'}
                width={105}
                height={122}
            />
            <div className="grid lg:flex md:flex sm:grid grid-cols-1 justify-between w-[100%] flex-wrap">
                <div className="flex items-top justify-between py-[7px]">
                    <span className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px] font-semibold max-w-[185px] lg:max-w-[100%] md:max-w-[100%] sm:max-w-[185px]">
                        это супер классное виски (24 шт)
                    </span>
                    <span className="text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] inline lg:hidden md:hidden sm:inline justify-between font-semibold cursor-pointer">
                        <img src="/close.svg" alt="close" />
                    </span>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-customPink border-dashed lg:border-none md:border-none sm:border-dashed py-[2px]">
                    <span className="text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] inline lg:hidden md:hidden sm:inline font-semibold">
                        цена
                    </span>
                    <span className="font-medium lg:font-semibold md:font-semibold sm:font-medium  text-[#878787] text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px]">
                        250 AED
                    </span>
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-customPink border-dashed lg:border-none md:border-none sm:border-dashed py-[2px]">
                    <span className="text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] inline lg:hidden md:hidden sm:inline justify-between font-semibold">
                        количество
                    </span>
                    <Counter
                        value={count}
                        increment={increment}
                        decrement={decrement}
                    />
                </div>
                <div className="flex items-center justify-between border-b-[1px] border-customPink border-dashed lg:border-none md:border-none sm:border-dashed py-[7px]">
                    <span className="text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px] inline lg:hidden md:hidden sm:inline font-semibold">
                        подытог
                    </span>
                    <span className="font-semibold text-customPink text-[12px] lg:text-[14px] md:text-[13px] sm:text-[12px]">
                        {count * 250} AED
                    </span>
                </div>
            </div>
        </div>
    )
}
