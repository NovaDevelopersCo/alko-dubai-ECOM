'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useParams } from 'next/navigation'
import {
    fetchItemById,
    fetchItems,
    selectCartItemById,
    selectItem,
    selectItems,
} from '@/lib/features/items/items'
import Container from '@/Components/ui/Container/Container'
import Link from 'next/link'
import { Counter } from '../ui/Counter/Counter'
import { addItems } from '@/lib/features/cart/cart'
import { CartItem } from '@/type/interfaceCart'
import { InputFetch } from '@/type/interfaceFilter'
import useEmblaCarousel from 'embla-carousel-react'

const ItemPage = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams<{ id: string }>()
    const item = useAppSelector(selectItem)
    const cartItem = useAppSelector(selectCartItemById(Number(id)))
    const [count, setCount] = React.useState(1)
    const [result, setResult] = React.useState([])
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        dragFree: true,
    })

    const items = useAppSelector(selectItems).items
    React.useEffect(() => {
        if (item !== null) {
            const inputFetch: InputFetch = {
                price: 'asc',
                popularity: false,
                news: false,
                sale: false,
                max_price: 12000,
                min_price: 0,
                limit: 100,
                category: item.category,
                search: '',
            }
            dispatch(fetchItems(inputFetch))
        }
    }, [dispatch, item])
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

    React.useEffect(() => {
        if (cartItem) {
            setCount(cartItem.count) // Устанавливаем значение счетчика равным количеству товара в корзине, если он есть
        } else {
            setCount(1) // Если товара нет в корзине, сбрасываем счетчик в 1
        }
    }, [cartItem])

    React.useEffect(() => {
        // Сбрасываем значение счетчика на 1 после успешного добавления товара в корзину
        if (cartItem && cartItem.count !== count) {
            setCount(1)
        }
    }, [cartItem])

    React.useEffect(() => {
        if (items) {
            setResult(items.filter((item: any) => item.id !== Number(id)))
        }
    }, [items, id])

    const onClickAdd = () => {
        if (item && item.image) {
            // Проверяем, не превышает ли текущее количество товаров в корзине с учетом добавляемого товара максимальное значение (20)
            const totalItemCount = cartItem ? cartItem.count + count : count
            if (totalItemCount <= 20) {
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
                dispatch(addItems(fetch))
                console.log('Товар добавлен', count, item)
                // Сбрасываем значение счетчика на 1
                setCount(1)
            } else {
                alert(
                    'Превышен лимит корзины на один товар, закажи что-то еще ;)',
                )
            }
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
            {result.length > 0 && (
                <>
                    <section className="embla max-w-70rem mx-auto my-8">
                        <div
                            className="embla__viewport overflow-hidden w-full h-auto"
                            ref={emblaRef}
                        >
                            <div className="embla__container flex touch-action: pan-y gap-4">
                                {result.map((item: any) => (
                                    <Link
                                        href={`/store/${item?.id}`}
                                        key={item?.id}
                                        className=" p-4 rounded-md hover:shadow-md"
                                    >
                                        <article className="w-44">
                                            <figure>
                                                <img
                                                    src={item?.image}
                                                    alt="png"
                                                    className="w-full rounded-md h-44 object-contain"
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
                                                    {item?.oldPrice !== 0 ? (
                                                        <div>
                                                            <span className="text-sm font-bold line-through text-customGray ">
                                                                <span>
                                                                    {
                                                                        item?.oldPrice
                                                                    }
                                                                    AED{' '}
                                                                </span>
                                                            </span>
                                                            {item?.price}
                                                            <span className="text-sm">
                                                                {' '}
                                                                AED
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <div>
                                                            {item?.price}
                                                            <span className="text-sm">
                                                                {' '}
                                                                AED
                                                            </span>
                                                        </div>
                                                    )}
                                                </p>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}
        </Container>
    )
}

export default ItemPage
