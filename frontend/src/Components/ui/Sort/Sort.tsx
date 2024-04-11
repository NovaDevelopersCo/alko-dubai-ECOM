"use client"
import React, { useContext, useEffect, useState } from 'react'
import {
    setPopularity,
    setNews,
    setPrice,
    setLimit,
    setGridCount,
} from '@/lib/features/filter/filter'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Container from '../Container/Container'
import { BurgerContext, CatalogContext } from '@/Components/context/AppContext'
import { Select } from 'antd'
import GridButton from '@/Components/ui/gridButton/GridButton'

const Sort = () => {
    const [visibleCatalog, setVisibleCatalog] = useContext(CatalogContext) //eslint-disable-line
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
    const limit = useAppSelector((state) => state.filters.limit)
    const gridCount = useAppSelector((state) => state.filters.gridCount)

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

    const handleLimitChange = (newLimit: number) => {
        dispatch(setLimit(newLimit))
    }

    const handleGridCountChange = (newGridCount: number) => {
        dispatch(setGridCount(newGridCount))
    }

    return (
        <div>
            <hr className="border-[#D32B82]" />
            <Container>
                <div className="flex items-end xl:px-0 py-2.5 justify-between">
                    <ul className="hidden mr-10 lg:flex">
                        Показать :&nbsp;
                        <li
                            className={`cursor-pointer ${
                                limit === 9 ? 'text-black' : 'text-gray-500'
                            }`}
                            onClick={() => handleLimitChange(9)}
                        >
                            &nbsp;9&nbsp;/&nbsp;
                        </li>
                        <li
                            className={`cursor-pointer ${
                                limit === 24 ? 'text-black' : 'text-gray-500'
                            }`}
                            onClick={() => handleLimitChange(24)}
                        >
                            24&nbsp;/
                        </li>
                        <li
                            className={`cursor-pointer ${
                                limit === 36 ? 'text-black' : 'text-gray-500'
                            }`}
                            onClick={() => handleLimitChange(36)}
                        >
                            &nbsp;36
                        </li>
                    </ul>
                    <ul className="max-w-[50px] gap-x-4 hidden lg:flex mr-auto">
                        {[2, 3, 4].map((i) => (
                            <li key={i} className="cursor-pointer ">
                                <GridButton
                                    onclick={() => handleGridCountChange(i)}
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
