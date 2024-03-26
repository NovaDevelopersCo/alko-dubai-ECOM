'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { initialState, setInitialCartItems } from '@/lib/features/cart/cart'
// lib
import { AppStore, makeStore } from '@/lib/store'

const itemsString = localStorage.getItem('cart') // Получаем строку или null из localStorage

// Преобразуем строку JSON в массив, если она не равна null
const items = itemsString ? JSON.parse(itemsString) : []

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Создаем экземпляр хранилища при первом рендеринге
        storeRef.current = makeStore()
        // Устанавливаем элементы корзины в начальное состояние
        setInitialCartItems(items) // Используем функцию setInitialCartItems
        // Если initialState является объектом, dispatch items directly
        storeRef.current.dispatch({ type: 'SET_ITEMS', payload: items })
    }
    return <Provider store={storeRef.current}>{children}</Provider>
}
