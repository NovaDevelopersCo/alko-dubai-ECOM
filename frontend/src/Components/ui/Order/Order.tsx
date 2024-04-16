'use client'
import Container from '@/Components/ui/Container/Container'
import { clearItems } from '@/lib/features/cart/cart'
import { selectOrder } from '@/lib/features/order/order'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { redirect } from 'next/navigation'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import React from 'react'

const Order = () => {
    const { order } = useAppSelector(selectOrder)
    const dispatch = useAppDispatch()
    const { loading } = useAppSelector((state) => ({
        loading: state.order.isLoading,
    }))
    React.useEffect(() => {
        if (!loading && order.items.length === 0) {
            redirect('/cart')
        } else if (!loading && order.items.length !== 0) {
            dispatch(clearItems())
        }
    }, [order, dispatch, loading])

    return (
        <Container>
            <div className="my-[20px] flex flex-col gap-[40px]">
                <h2 className="p-[20px_10px] border-dashed border border-customPink font-bold text-center text-[36px] text-customPink">
                    Ваш заказ принят. Благодарим Вас.
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px]">
                    <div className="text-center">
                        <p className="text-[16px] text-customGray font-semibold">
                            Номер заказа:
                        </p>
                        <p className="text-[15px] font-semibold">
                            {order.id !== 0 ? (
                                order.id
                            ) : (
                                <Skeleton
                                    width={40}
                                    height={15}
                                    className="rounded my-3"
                                />
                            )}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] text-customGray font-semibold">
                            Дата:
                        </p>
                        <p className="text-[15px] font-semibold">
                            {order.updatedAt ? (
                                order.updatedAt
                                    .toString()
                                    .replace('T', '')
                                    .replaceAll('-', '.')
                                    .slice(0, 10) +
                                ' ' +
                                order.updatedAt
                                    .toString()
                                    .replace('T', '')
                                    .replaceAll('-', '.')
                                    .slice(10, 15)
                            ) : (
                                <Skeleton
                                    width={120}
                                    height={15}
                                    className="rounded my-3"
                                />
                            )}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] text-customGray font-semibold">
                            Итого:
                        </p>
                        <p className="text-[15px] font-semibold flex justify-center items-center">
                            {order.price !== 0 ? (
                                order.price
                            ) : (
                                <Skeleton
                                    width={60}
                                    height={15}
                                    className="rounded my-3"
                                />
                            )}{' '}
                            AED
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] text-customGray font-semibold">
                            Способ оплаты:
                        </p>
                        <p className="text-[15px] font-semibold">
                            Оплата при доставке
                        </p>
                    </div>
                </div>
                <div className="text-center text-customGray font-semibold flex justify-center items-center">
                    Оплата{' '}
                    {order.payment !== '' ? (
                        order.payment
                    ) : (
                        <Skeleton
                            width={60}
                            height={15}
                            className="rounded my-3"
                        />
                    )}{' '}
                    при доставке заказа
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[36px] text-customPink">
                        Информация о заказе
                    </h2>
                    <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">ТОВАР</span>
                        <span className="font-bold">ИТОГО</span>
                    </div>
                    {order.items.length !== 0 ? (
                        order.items.map((item: any, index: number) => (
                            <div
                                className="flex justify-between border-b-[1px] border-customGray p-[10px]"
                                key={index}
                            >
                                <span className="font-bold">
                                    {item.title !== '' ? (
                                    item.title + ` (${item.count})`
                                    ) : (
                                        <Skeleton
                                            width={60}
                                            height={15}
                                            className="rounded my-3"
                                        />
                                    )}
                                </span>
                                <span className="text-customGray font-semibold">
                                    {item.price !== 0 ? (
                                        item.price * item.count
                                    ) : (
                                        <Skeleton
                                            width={40}
                                            height={15}
                                            className="rounded my-3"
                                        />
                                    )}{' '}
                                    AED
                                </span>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                            <span className="font-bold">
                                <Skeleton
                                    width={150}
                                    height={20}
                                    className="rounded my-3"
                                />
                            </span>
                            <span className="text-customGray font-semibold flex items-center">
                                <Skeleton
                                    width={60}
                                    height={15}
                                    className="rounded my-3"
                                />
                                {'  '}
                                AED
                            </span>
                        </div>
                    )}
                    <div className="flex justify-between flex-wrap border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">ПРИМЕЧАНИЕ:</span>
                        <p className="text-customGray text-wrap max-w-full break-words">
                            {order?.details ? order.details : 'Нет'}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Order
