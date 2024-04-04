"use client"
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { setInitialCartItems } from '@/lib/features/cart/cart';
import Cookies from 'js-cookie'; // Импортируем библиотеку js-cookie
// lib
import { AppStore, makeStore } from '@/lib/store';

const itemsString = Cookies.get('cart'); // Получаем строку или undefined из cookies

// Преобразуем строку JSON в массив, если она не равна undefined
const items = itemsString ? JSON.parse(itemsString) : [];

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        // Создаем экземпляр хранилища при первом рендеринге
        storeRef.current = makeStore();
        // Устанавливаем элементы корзины в начальное состояние
        setInitialCartItems(items); // Используем функцию setInitialCartItems
        // Если initialState является объектом, dispatch items directly
        storeRef.current.dispatch({ type: 'SET_ITEMS', payload: items });
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
}