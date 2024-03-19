'use client'
import React, { useEffect, useRef } from 'react'
import { fetchItems } from '@/lib/features/items/items'
import { selectItems } from '@/lib/features/items/items'
import { Item } from '@/Components/entity/item'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import Grid from '../GridContainer/Grid'
import { Pagination } from 'antd'
import { InputFetch } from '@/type/interfaceFilter'

function MainStore() {
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectItems).items
    const pages = useAppSelector(selectItems).totalPages

    const isInitialMount = useRef(true)

    const fetchItemsInput: InputFetch = {
        price: 'asc',
        popularity: true,
        news: true,
        max_price: 12000,
        min_price: 0,
        limit: 100,
    }

    const updateItems = () => {
        dispatch(fetchItems(fetchItemsInput))
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
    }, [dispatch])

    let products = null

    if (items) {
        products = items.map((obj: any) => (
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
