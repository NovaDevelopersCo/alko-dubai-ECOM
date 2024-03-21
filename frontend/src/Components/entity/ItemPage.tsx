"use client"
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useParams } from 'next/navigation'
import {
    fetchItemById,
    selectCartItemById,
    selectItem,
} from '@/lib/features/items/items'
import Container from '@/Components/ui/Container/Container'
import Link from 'next/link'
import { Counter } from '../ui/Counter/Counter'
import { addItem, selectCart } from '@/lib/features/cart/cart'
import { CartItem } from '@/type/interfaceCart'

const ItemPage = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams<{ id: string }>()
    const item = useAppSelector(selectItem)
    const cartItem = useAppSelector(selectCartItemById(Number(id)))
    const [count, setCount] = React.useState(1)

    React.useEffect(() => {
        dispatch(fetchItemById(id))
    }, [dispatch, id])

    React.useEffect(() => {
        if (cartItem) {
            setCount(cartItem.count) // Устанавливаем значение счетчика равным количеству товара в корзине, если он есть
        } else {
            setCount(1) // Если товара нет в корзине, сбрасываем счетчик в 1
        }
    }, [cartItem])

    const increment = () => {
        setCount((prevCount) => prevCount + 1) // Увеличиваем счетчик на 1
    }

    const decrement = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1) // Уменьшаем счетчик на 1, если он больше 1
        }
    }

    const onClickAdd = () => {
        if (item && item.image) {
            const fetch: CartItem = {
                id: item.id,
                category: item.category,
                title: item.title,
                price: item.price,
                image: item.image,
                sale: item.sale,
                oldPrice: item.oldPrice,
                count: count, // Используем текущее значение счетчика
            }
            dispatch(addItem(fetch))
            console.log('Товар добавлен', count)
        }
    }
    return (
        <Container>
            <article>
                <figure>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-1/3 min-w-[206px] min-h-[250px] mt-10 lg:mb-10 md:mr-auto ">
                            <img
                                src={item?.image}
                                alt="png"
                                className="w-full ml-0"
                            />
                        </div>
                        <div className="md:mt-28">
                            <span className="opacity-70 text-3xl ">
                                {item?.title}
                            </span>
                            <div className="font-bold text-customPink mt-6">
                                {item?.oldPrice &&
                                item?.oldPrice > item?.price ? (
                                    <span className="text-3xl font-bold line-through text-customGray mr-1">
                                        <span>{item?.oldPrice}AED </span>
                                    </span>
                                ) : (
                                    ''
                                )}
                                <span className="text-3xl">
                                    {' '}
                                    {item?.price} AED
                                </span>
                            </div>
                            <div className="flex mt-7 mb-16 ">
                                <div className="flex items-center mr-4">
                                    <Counter
                                        value={count}
                                        increment={increment}
                                        decrement={decrement}
                                    ></Counter>
                                </div>
                                <button
                                    onClick={onClickAdd}
                                    className="text-base font-semibold bg-customPink text-white py-3 px-14 rounded-3xl"
                                >
                                    В корзину
                                </button>
                            </div>
                            <div className="border-t-[1px] border-customPink md:min-w-20 flex">
                                <p className="mt-4 mr-2 text-lg font-medium">
                                    КАТЕГОРИЯ :
                                </p>{' '}
                                <p className="font-medium text-xl text-customGray mt-4">
                                    {item?.category}
                                </p>
                            </div>
                        </div>
                    </div>
                </figure>
            </article>
            <div className="border-b-[1px] border-customPink max-w-64 mt-28">
                <p className="mb-4 font-medium text-3xl">Похожие товары</p>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24 mt-10">
                <Link
                    href={`/store/${item?.id}`}
                    key={item?.id}
                    className=" p-4 rounded-md hover:shadow-md"
                >
                    <article>
                        <figure>
                            <img
                                src={item?.image}
                                alt="png"
                                className="w-full h-auto rounded-md"
                            />
                        </figure>
                        <div className="mt-4 text-center">
                            <span className="text-sm mb-2">
                                {item?.category}{' '}
                            </span>
                            <span className="opacity-70 text-sm">
                                {item?.title}
                            </span>
                            <p className=" font-bold text-customPink ">
                                <span className="text-sm font-bold line-through text-customGray ">
                                    <span>{item?.oldPrice}AED </span>
                                </span>
                                {item?.price}
                                <span className="text-sm"> AED</span>
                            </p>
                        </div>
                    </article>
                </Link>
            </ul>
        </Container>
    )
}

export default ItemPage
