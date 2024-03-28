'use client'
import Container from '@/Components/ui/Container/Container'
import { selectCart } from '@/lib/features/cart/cart'
import { selectOrder } from '@/lib/features/order/order'
import { useAppSelector } from '@/lib/hooks'
import { redirect } from 'next/navigation'
import React from 'react'

const Order = () => {
    const { items } = useAppSelector(selectCart)
    const { order } = useAppSelector(selectOrder)

    if (!items.length || order.items.length === 0) {
        redirect('/cart')
    }

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
                        <p className="text-[15px] font-semibold">{order.id}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] text-customGray font-semibold">
                            Дата:
                        </p>
                        <p className="text-[15px] font-semibold">
                            {Date.parse(order?.updatedAt as unknown as string)}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] text-customGray font-semibold">
                            Итого:
                        </p>
                        <p className="text-[15px] font-semibold">
                            {order.price} AED
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
                <div className="text-center text-customGray font-semibold">
                    Оплата {order.payment} при доставке заказа
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[36px] text-customPink">
                        Информация о заказе
                    </h2>
                    <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">ТОВАР</span>
                        <span className="font-bold">ИТОГО</span>
                    </div>
                    {order.items.map((item: any, index: number) => (
                        <div className="flex justify-between border-b-[1px] border-customGray p-[10px]" key={index}>
                            <span className="font-bold">{item.title}</span>
                            <span className="text-customGray font-semibold">
                                {item.price} AED
                            </span>
                        </div>
                    ))}
                    <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">ПРИМЕЧАНИЕ:</span>
                        <span className="text-customGray">
                            {order?.details ? order.details : 'Нет'}
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Order
