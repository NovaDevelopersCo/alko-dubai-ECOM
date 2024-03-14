'use client'
import React, { useContext, useEffect, useState } from 'react'
import Container from '../Container/Container'
import { BurgerContext, CatalogContext } from '@/Components/context/AppContext'

const Sort = () => {
    const [visibleCatalog, setVisibleCatalog] = useContext(CatalogContext)
    const [isBurgerOpen, setIsBurgerOpen] = useContext(BurgerContext)
    const [width, setWidth] = useState(true)
    let flag = false

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
            <Container>
                <div className="flex justify-between items-center">
                    <pre>
                        <p
                            className="lg:hidden w-max cursor-pointer"
                            onClick={() => {
                                setVisibleCatalog((state) => !state)
                            }}
                        >
                            Фильтр{' '}
                            <span className="font-bold text-[#D32B82]">
                                {'>'}
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
                </div>
            </Container>
            <hr className="border-[#D32B82]" />
        </div>
    )
}

export default Sort
