'use client'
import React, { useEffect, useRef } from 'react'
import { fetchItems } from '@/lib/features/items/items'
import { selectItems } from '@/lib/features/items/items'
import { Item } from '@/Components/entity/item'
import MainPageSort from '../MainPageSort/MainPageSort'
import { selectFilter } from '@/lib/features/filter/filter'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Grid from '../GridContainer/Grid'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { InputFetch } from '@/type/interfaceFilter'

function StartStore() {
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectItems).items
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
    console.log(items)
    if (items) {
        // Ограничиваем количество элементов до limit с помощью slice
        const limitedItems = items.slice(0, limit)
        products = limitedItems.map((obj: any) => (
            <Item key={obj.id} disabled={true} {...obj}></Item>
        ))
    } else {
        products = Array.from({ length: 6 }, (_, index) => (
            <div className="flex flex-col justify-center items-center" key={index}>
                <Skeleton width={150} height={150} className="rounded my-3" />
                <Skeleton width={150} height={30} className="rounded my-3" />
            </div>
        ))
    }

    return (
        <div>
            <h1 className=" text-lg md:text-2xl uppercase flex justify-center m-6">
                Популярные Товары
            </h1>
            <MainPageSort />
            <Grid>{products}</Grid>
        </div>
    )
}

export default StartStore
