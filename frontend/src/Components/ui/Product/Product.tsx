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
        <div className="flex items-center border-b-[1px] border-customPink">
            <Image
                className="cursor-pointer"
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
            <div className="flex justify-between w-[100%]">
                <div className="flex items-center">
                    <span>это супер классное виски</span>
                    <span>(24 шт)</span>
                </div>
                <div className="flex items-center">
                    <span className="font-semibold text-[#878787]">
                        250 AED
                    </span>
                </div>
                <Counter
                    value={count}
                    increment={increment}
                    decrement={decrement}
                />
                <div className="flex items-center">
                    <span className="font-semibold text-customPink">
                        {count * 250} AED
                    </span>
                </div>
            </div>
        </div>
    )
}
