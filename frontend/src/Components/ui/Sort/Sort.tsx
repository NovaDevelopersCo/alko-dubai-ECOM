'use client'
import React, { useContext, useEffect, useState } from 'react'
import Container from '../Container/Container'
import { BurgerContext, CatalogContext } from '@/Components/context/AppContext'
import clsx from 'clsx'
import { Select } from 'antd'
import {
    selectFilter,
    setPopularity,
    setNews,
    setPrice,
} from '@/lib/features/filter/filter'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'

const Sort = () => {
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
    const { popularity, news, price } = useAppSelector(selectFilter)

    const handlePopularityChange = () => {
        if (!popularity) {
            dispatch(setPopularity(!popularity))
        }
    }

    const handleNewsChange = () => {
        if (!news) {
            dispatch(setNews(!news))
        }
    }

    const handlePriceDesc = () => {
        if (!price) {
            dispatch(setPrice('desc'))
        }
    }

    const handlePriceAsc = () => {
        if (!price) {
            dispatch(setPrice('asc'))
        }
    }

    return (
        <div>
            <hr className="border-[#D32B82]" />
            <hr
                className={clsx([
                    visibleCatalog
                        ? 'absolute top-0 left-0 z-[101] lg:hidden w-80 border-[#D32B82]'
                        : '',
                ])}
            />
            <Container>
                <div className="flex justify-between items-center px-5 xl:px-0">
                    <pre
                        className={clsx([
                            visibleCatalog
                                ? 'fixed top-7 left-56 z-[101] lg:static'
                                : '',
                        ])}
                    >
                        <p
                            className="lg:hidden flex w-max cursor-pointer whitespace-nowrap"
                            onClick={() => {
                                setVisibleCatalog((state) => !state)
                            }}
                        >
                            {!visibleCatalog ? 'Фильтр ' : 'Закрыть '}
                            <span className="font-bold text-[#D32B82]">
                                {!visibleCatalog ? (
                                    '>'
                                ) : (
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsUlEQVR4nGNgGAWDElzWbs68oFcvRqx6kFqQHiINb8y6rN30/7J202ViLIEY3nQZoqcxi6AF5wxaRS9rNV4Ca9Bqun5No0WSWLVXtOoliPIFMZacI9dwYiw5R6nh+Cw5Ry3DsVlySbv51hWtxmtUMxzZkkswg8EWNd2mmuG4LMCXukgC55DDHC2IKLYEW4SSkk9INpwBhxzJlhCTFM+Rawkp6fwcOZbQvLCjeXE9CugOALT+EUkssP+7AAAAAElFTkSuQmCC"></img>
                                )}
                            </span>
                        </p>
                    </pre>
                    <Select
                        placeholder="Исходная сортировка"
                        className="rounded cursor-pointer before:bg-[#D32B82] min-w-max"
                    >
                        <Select.Option value="asc" className="rounded">
                            Цене (возрастание)
                        </Select.Option>
                        <Select.Option value="desc" className="rounded">
                            Цене (убывание)
                        </Select.Option>
                        <Select.Option value="news" className="rounded" onClick={handleNewsChange}>
                            Новизне
                        </Select.Option>
                        <Select.Option value="popularity" className="rounded" onClick={handlePopularityChange}>
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
