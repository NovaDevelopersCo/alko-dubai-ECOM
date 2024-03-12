'use client'
import React, { useContext, useEffect } from 'react'
import Container from '../Container/Container'
import { CatalogContext } from '@/Components/context/AppContext'

const Sort = () => {
    const [visibleCatalog, setVisibleCatalog] = useContext(CatalogContext)
    const ref = React.useRef(null)
    const [width, setWidth] = React.useState(0)

    const onResize = React.useCallback(() => {
        if (window.innerWidth) setWidth(window.innerWidth)
    }, [])

    React.useEffect(() => {
        window.addEventListener('resize', onResize)
        onResize()
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    if (width > 1024 && visibleCatalog === false) {
        setVisibleCatalog(true)
    } else if (width <= 1024 && visibleCatalog === true) {
        setVisibleCatalog(false)
    }
    console.log(visibleCatalog)

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
