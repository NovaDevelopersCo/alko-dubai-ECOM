'use client'
import React, { useContext, useEffect, useState } from 'react'
import Container from '../Container/Container'
import { BurgerContext, CatalogContext } from '@/Components/context/AppContext'
import clsx from 'clsx'
import Image from "next/image";

const Sort = ({setLayoutCount}:{setLayoutCount:(c:number)=>void}) => {
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
                <div className="flex justify-between items-center px-5 xl:px-0 py-2">
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
                                    <img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsUlEQVR4nGNgGAWDElzWbs68oFcvRqx6kFqQHiINb8y6rN30/7J202ViLIEY3nQZoqcxi6AF5wxaRS9rNV4Ca9Bqun5No0WSWLVXtOoliPIFMZacI9dwYiw5R6nh+Cw5Ry3DsVlySbv51hWtxmtUMxzZkkswg8EWNd2mmuG4LMCXukgC55DDHC2IKLYEW4SSkk9INpwBhxzJlhCTFM+Rawkp6fwcOZbQvLCjeXE9CugOALT+EUkssP+7AAAAAElFTkSuQmCC"></img>
                                )}
                            </span>
                        </p>
                    </pre>
                    <p className="text-md text-center w-max sm:text-right pr-2.5 rounded">
                        <select
                            name="sort-by"
                            className="rounded cursor-pointer before:bg-[#D32B82]"
                        >
                            <option value="asc" className="rounded">
                                Исходная сортировка
                            </option>
                            <option value="asc" className="rounded">
                                Цене (возрастание)
                            </option>
                            <option value="desc" className="rounded">
                                Цене (убывание)
                            </option>
                            <option value="news" className="rounded">
                                Новизне
                            </option>
                            <option value="popularity" className="rounded">
                                Популярности
                            </option>
                        </select>
                    </p>
                    <div className="md:flex gap-x-4 hidden">
                        <Image className="cursor-pointer" onClick={()=>setLayoutCount(2)} width={34} height={34} alt="group" src="Group 2.svg"></Image>
                        <Image className="cursor-pointer" onClick={()=>setLayoutCount(3)} width={34} height={34} alt="group" src="Group 3.svg"></Image>
                        <Image className="cursor-pointer" onClick={()=>setLayoutCount(4)} width={34} height={34} alt="group" src="Group 4.svg"></Image>
                    </div>

                </div>
            </Container>
            <hr className="border-[#D32B82]" />
        </div>
    )
}

export default Sort
