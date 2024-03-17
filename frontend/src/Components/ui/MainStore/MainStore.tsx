'use client'
import React, { useEffect, useRef } from 'react'
import { fetchItems } from '@/lib/features/items/items'
import { selectItems } from '@/lib/features/items/items'
import { Item } from '@/Components/entity/item'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Grid from '../GridContainer/Grid'
import { InputFetch } from '@/type/interface'
import { Pagination } from 'antd'
import { selectFilter } from '@/lib/features/filter/filter'

function MainStore() {
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectItems).items
    const pages = useAppSelector(selectItems).totalPages
    const filter = useAppSelector(selectFilter) // Получаем параметры фильтрации из хранилища
    const limit = 8 // Устанавливаем лимит
    const isInitialMount = useRef(true) // Ссылка, позволяющая определить, первый ли раз вызывается компонент

    // Функция для обновления элементов
    const updateItems = () => {
        // Формируем объект inputFetch, учитывая выбор пользователя
        const inputFetch: InputFetch = {
            ...(filter.popularity ? { popularity: true } : {}), // Добавляем свойство popularity только если оно true
            ...(filter.news ? { news: true } : {}),
            ...(filter.sale ? { sale: true } : {}),
            limit: limit,
            // Добавляем свойство news только если оно true
        }

        // Вызываем асинхронный экшен для получения элементов
        dispatch(fetchItems(inputFetch))
    }

    // Вызываем функцию updateItems только при изменении параметров фильтрации
    useEffect(() => {
        // Проверяем, первый ли раз вызывается компонент
        if (!isInitialMount.current) {
            updateItems()
        } else {
            // Если это первый раз, устанавливаем флаг в false
            isInitialMount.current = false
        }
    }, [filter, dispatch, limit])

    let products = null // По умолчанию нет товаров
    if (items) {
        // Ограничиваем количество элементов до limit с помощью slice
        const limitedItems = items.slice(0, limit)
        products = limitedItems.map((obj: any) => (
            <Item key={obj.id} disabled={true} {...obj}></Item>
        ))
    }

    return (
        <div>
            <Grid>{products}</Grid>
            <Pagination
                className="text-center"
                showSizeChanger={false}
                pageSize={items ? Object.keys(items).length / pages : 2}
                total={items ? Object.keys(items).length : 2}
            />
        </div>
    )
}

export default MainStore
