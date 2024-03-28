'use client'

import React, {useEffect, useRef, useState} from 'react'
import { fetchItems } from '@/lib/features/items/items'
import { selectItems } from '@/lib/features/items/items'
import { Item } from '@/Components/entity/item'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Grid from '../GridContainer/Grid'
import { Pagination } from 'antd'
import { selectFilter, setLimit } from '@/lib/features/filter/filter'
import { InputFetch } from '@/type/interfaceFilter'

function MainStore({gridCount,limit}:{gridCount:number, limit:number}) {
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectItems).items
    const pages = useAppSelector(selectItems).totalPages
    const [currentPage, setCurrentPage] = useState<number>(0)
    const filter = useAppSelector(selectFilter) // Получаем параметры фильтрации из хранилища

    const isInitialMount = useRef(true) // Ссылка, позволяющая определить, первый ли раз вызывается компонент
    dispatch(setLimit(8))
    // Функция для обновления элементов
    const updateItems = () => {
        // Формируем объект inputFetch, учитывая выбор пользователя
        const inputFetch: InputFetch = {
            ...(filter.popularity ? { popularity: true } : {}), // Добавляем свойство popularity только если оно true
            ...(filter.news ? { news: true } : {}),
            ...(filter.price ? { price: filter.price } : {}),
            ...(filter.max_price ? { max_price: filter.max_price } : {}),
            ...(filter.min_price ? { min_price: filter.min_price } : {}),
            ...(filter.category ? { category: filter.category } : {}),
            ...(filter.search ? { search: filter.search } : {}),
            ...(filter.limit ? { limit: filter.limit } : {}),
            // Добавляем свойство news только если оно true
        }

        // Вызываем асинхронный экшен для получения элементов
        dispatch(fetchItems(inputFetch))
    }
    const limitCount = () => {
        switch (limit) {
            case 9:
                return 9;
            case 24:
                return 24;
            case 36:
                return 36;
            default:
                return 9;
        }
    }
    // Вызываем функцию updateItems только при изменении параметров фильтрации
    useEffect(() => {
        if (!isInitialMount.current) {
            updateItems();
        } else {
            isInitialMount.current = false;
        }
    }, [filter, dispatch, limit]);

    useEffect(() => {
        updateItems();
    }, [limit]);

    let products = null // По умолчанию нет товаров
    if (items && limit !== undefined) {
        // Ограничиваем количество элементов до limit с помощью slice
        const limitedItems = items.slice(
            currentPage * limit,
            currentPage * limit + limit,
        )
        products = limitedItems.map((obj: any) => (
            <Item key={obj.id} disabled={true} {...obj}></Item>
        ))
    }

    return (
        <div>
            {products && products.length > 0 ? (
                <Grid gridCount={gridCount}>{products}</Grid>
            ) : (
                <div className="w-full h-96 flex justify-center items-center">
                    Ничего не найдено😢
                </div>
            )}
            <Pagination
                className="text-center"
                showSizeChanger={false}
                onChange={(page) => {
                    setCurrentPage(page - 1)
                }}
                pageSize={
                    items && Object.keys(items).length > 0
                        ? Object.keys(items).length / pages
                        : 1
                }
                total={
                    items && Object.keys(items).length > 0
                        ? Object.keys(items).length
                        : 1
                }
            />
        </div>
    )
}

export default MainStore
