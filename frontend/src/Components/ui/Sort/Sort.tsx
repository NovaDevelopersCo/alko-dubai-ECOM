'use client'
import React, { useContext, useEffect, useState } from 'react'
import Container from '../Container/Container'
import { BurgerContext, CatalogContext } from '@/Components/context/AppContext'
import clsx from 'clsx'
import { Select } from 'antd'
import { setPopularity, setNews, setPrice } from '@/lib/features/filter/filter'
import { useAppDispatch } from '@/lib/hooks'
import GridButton from '@/Components/ui/gridButton/GridButton'
import Image from 'next/image'

const Sort = ({
    gridCount,
    setGridCount,
    limit,
    setLimit,
}: {
    gridCount: number
    setGridCount: (count: number) => void
    limit: number
    setLimit: (lim: number) => void
}) => {
    const [visibleCatalog, setVisibleCatalog] = useContext(CatalogContext)
    const [isBurgerOpen, setIsBurgerOpen] = useContext(BurgerContext)
    const [width, setWidth] = useState(true)
    let flag = false
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', function resizeHandler() {
            if (window.innerWidth < 1024 && !flag && width) {
                if (isBurgerOpen) {
                    setIsBurgerOpen(false)
                }
                setWidth(false)
                setVisibleCatalog(false)
                flag = true
            } else if (window.innerWidth >= 1024 && flag && width) {
                setWidth(true)
                setVisibleCatalog(true)
                flag = false
            }
        })
    }

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setWidth(false)
            setVisibleCatalog(false)
            flag = true
        } else if (window.innerWidth >= 1024) {
            setWidth(true)
            setVisibleCatalog(true)
            flag = false
        }
    }, [])

    const dispatch = useAppDispatch()

    const onChange = (value: string) => {
        if (value === 'asc' || value === 'desc') {
            dispatch(setPrice(value))
            dispatch(setPopularity(false))
            dispatch(setNews(false))
        }
        if (value === 'popularity') {
            dispatch(setPrice('asc'))
            dispatch(setPopularity(true))
            dispatch(setNews(false))
        }
        if (value === 'news') {
            dispatch(setPrice('asc'))
            dispatch(setPopularity(false))
            dispatch(setNews(true))
        }
    }

    return (
        <div>
            <hr className="border-[#D32B82]" />
            {/* <hr
                className={clsx([
                    visibleCatalog
                        ? 'absolute top-0 left-0 z-[101] lg:hidden w-80 border-[#D32B82]'
                        : '',
                ])}
            /> */}
            <Container>
                <div className="flex items-center xl:px-0 py-2.5">
                    <ul className=" hidden lg:flex">
                        Показать :&nbsp;
                        <li
                            className={`cursor-pointer ${
                                limit === 9 ? 'text-black' : 'text-gray-500'
                            }`}
                            onClick={() => setLimit(9)}
                        >
                            &nbsp;9&nbsp;/&nbsp;
                        </li>
                        <li
                            className={`cursor-pointer ${
                                limit === 24 ? 'text-black' : 'text-gray-500'
                            }`}
                            onClick={() => setLimit(24)}
                        >
                            24&nbsp;/
                        </li>
                        <li
                            className={`cursor-pointer ${
                                limit === 36 ? 'text-black' : 'text-gray-500'
                            }`}
                            onClick={() => setLimit(36)}
                        >
                            &nbsp;36
                        </li>
                    </ul>
                    <ul className="max-w-[50px]  gap-x-4 hidden lg:flex ml-11">
                        {[2, 3, 4].map((i) => (
                            <li key={i} className="cursor-pointer ">
                                <GridButton
                                    onclick={() => setGridCount(i)}
                                    gridCount={gridCount}
                                    index={i}
                                />
                            </li>
                        ))}
                    </ul>
                    <p
                        className="lg:hidden cursor-pointer"
                        onClick={() => {
                            setVisibleCatalog((state) => !state)
                        }}
                    >
                        Фильтр <span className="text-customPink">{'>'}</span>
                    </p>
                    {/* <pre
                        className={clsx([
                            visibleCatalog
                                ? 'fixed top-7 left-56 z-[101] lg:static'
                                : '',
                        ])}
                    >
                        <p
                            className="lg:hidden flex w-max cursor-pointer whitespace-nowrap items-center gap-1"
                            onClick={() => {
                                setVisibleCatalog((state) => !state)
                            }}
                        >
                            {!visibleCatalog ? 'Фильтр ' : 'Закрыть '}
                            <span className="font-bold text-[#D32B82]">
                                {!visibleCatalog ? (
                                    '>'
                                ) : (

                                    <Image
                                        src="/close.svg"
                                        alt="close"
                                        width={12}
                                        height={12}
                                    />
                                )}
                            </span>
                        </p>
                    </pre> */}
                    <Select
                        onChange={(value) => onChange(value)}
                        placeholder="Исходная сортировка"
                        className="rounded cursor-pointer before:bg-[#D32B82] min-w-max ml-auto"
                    >
                        <Select.Option value="asc" className="rounded">
                            Цене (возрастание)
                        </Select.Option>
                        <Select.Option value="desc" className="rounded">
                            Цене (убывание)
                        </Select.Option>
                        <Select.Option value="news" className="rounded">
                            Новизне
                        </Select.Option>
                        <Select.Option value="popularity" className="rounded">
                            Популярности
                        </Select.Option>
                    </Select>
                </div>
            </Container>
            <hr className="border-[#D32B82]" />
        </div>
    )
}

export default Sort
