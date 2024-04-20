'use client'
import { setCategory, setSearch } from '@/lib/features/filter/filter'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import { category } from '@/type/interfaceCategory'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { MouseEvent } from 'react'

function Swaiper() {
    const dispatch = useAppDispatch()
    const categories = useAppSelector(
        (state: RootState) => state.categories.posts,
    ) as any
    const categoriesArray = Array.from(categories) as category[]
    const item = []
    for (let i = 0; i < categoriesArray.length; i++) {
        item.push({
            key: i,
            label: (
                <Link
                    href={`/store/catalog/${categoriesArray[i].title}`}
                    className="flex justify-between w-48"
                    key={categoriesArray[i].id}
                    onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                        dispatch(setCategory(categoriesArray[i].title))
                        dispatch(setSearch(''))
                        event as unknown as MouseEvent<HTMLAnchorElement>
                    }}
                >
                    <div className="text-base">{categoriesArray[i].title}</div>
                </Link>
            ),
        })
    }

    const items: MenuProps['items'] = item
    return (
        <div className="bg-black rounded-xl flex items-center">
            <div className="flex-1">
                <div className="flex justify-center items-center h-full">
                    <h1 className="uppercase text-white text-center text-xs md:w-[130px] lg:w-[500px] md:text-md lg:text-4xl">
                        Доставка алкогольных напитков в Дубае
                        <br />
                        <Dropdown menu={{ items }} trigger={['click', 'hover']}>
                            <a
                                onClick={(e) => e.preventDefault()}
                                className="normal-case bg-white font-montserrat mt-3 text-sm md:text-lg p-3 px-4 rounded-md text-black"
                            >
                                Выбрать напиток&nbsp;
                                <DownOutlined />
                            </a>
                        </Dropdown>
                    </h1>
                    <span className="text-white text-2xl md:m-3 lg:m-6">
                        <svg
                            width="2"
                            height="89"
                            viewBox="0 0 2 89"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="1"
                                x2="1"
                                y2="89"
                                stroke="white"
                                strokeWidth="2"
                            />
                        </svg>
                    </span>
                    <span className="text-white md:text-md lg:text-7xl w-14 md:w-auto">
                        24/7
                    </span>
                </div>
            </div>
            <div className="flex-shrink-0">
                <Image
                    className="rounded-xl w-32 md:h-72 md:w-64 object-cover object-center"
                    src="/Cup.jpg"
                    width={341}
                    height={510}
                    alt="Cup"
                />
            </div>
        </div>
    )
}

export default Swaiper
