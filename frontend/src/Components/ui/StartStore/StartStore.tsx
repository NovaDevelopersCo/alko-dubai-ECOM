"use client"
import MainPageSort from '../MainPageSort/MainPageSort'
import { Item } from '@/Components/entity/item'
import React, { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchItems, selectItems } from '@/lib/features/items/items'
import { InputFetch } from '@/type/interface'

function StartStore() {
    const dispatch = useAppDispatch()
    const items = useAppSelector(selectItems).items
    const pages = useAppSelector(selectItems).totalPages
    // const inputFetch: InputFetch = useMemo(
    //     () => ({
    //         price: 'desc',
    //         popularity: false,
    //         news: false,
    //         max_price: 12000,
    //         min_price: 0,
    //         currentPage:0,
    //     }),
    //     [],
    // )

    const inputFetch: InputFetch = async () => {
        const price = 'desc'
        const popularity = false
        const news = false
        const max_price = 12000
        const min_price = 0
        const currentPage = 0
        const limit = 100

        dispatch(
            fetchItems({
                price,
                popularity,
                news,
                max_price,
                min_price,
                currentPage,
                limit,
            }),
        )
    }

    useEffect(() => {
        dispatch(fetchItems(inputFetch))
    }, [dispatch, inputFetch])
    const products = items.map((obj:any) => <Item key={obj.id} disabled={true} {...obj}></Item>);
    return (
        <div>
            <MainPageSort/>
            <div>{products}</div>
        </div>
    )
}

export default StartStore
