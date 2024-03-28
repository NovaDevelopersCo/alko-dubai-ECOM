import { selectCart } from '@/lib/features/cart/cart'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { redirect } from 'next/navigation'
import { fetchOrder } from '@/lib/features/order/order'

export default function PaymentForm() {
    const { totalPrice, items } = useAppSelector(selectCart)
    const dispatch = useAppDispatch()

    const onFinish = (values: any) => {
        dispatch(
            fetchOrder({
                ...values,
                items,
                price: totalPrice,
            }),
        )
        redirect('/order')
    }
    if (items.length === 0) {
        redirect('/cart')
    }
    return (
        <Form name="order" onFinish={onFinish} style={{ marginTop: 50 }}>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full flex flex-col items-center lg:items-start max-w-full">
                    <p className="text-3xl">Детали оплаты</p>
                    <Form.Item
                        name={'name'}
                        label="Имя"
                        className="w-full lg:w-[300px]"
                        rules={[{ required: true }]}
                    >
                        <Input placeholder="Игорь" />
                    </Form.Item>
                    <Form.Item
                        name={'email'}
                        label="Почта"
                        className="w-full lg:w-[300px]"
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Пожалуйста, введите вашу почту!',
                            },
                        ]}
                    >
                        <Input placeholder="example@gmail.com" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Телефон"
                        className="w-full lg:w-[300px]"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите ваш телефон!',
                            },
                        ]}
                    >
                        <PhoneInput country={'ru'} placeholder="9565814629" />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Адрес"
                        className="w-full sm:w-[450px]"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите ваш адрес!',
                            },
                        ]}
                    >
                        <Input placeholder="Улица, дом, квартира" />
                    </Form.Item>
                    <Form.Item
                        name={'details'}
                        label="Примечания к заказу"
                        className="w-full sm:w-[450px]"
                    >
                        <Input.TextArea placeholder="Примечания к заказу" />
                    </Form.Item>
                    <p className="text-xs text-[#878787] w-full sm:w-[450px] mb-5">
                        Ваши личные данные будут использоваться для обработки
                        ваших заказов , упрощения вашей работы с сайтом и для
                        других целей, описанных в нашей{' '}
                        <span className="text-black">
                            политике конфиденциальности
                        </span>
                    </p>
                </div>
                <div className="w-full sm:w-[450px] bg-[#F3F3F2] flex flex-col justify-start px-5 py-5 mb-8 rounded-lg">
                    <p className="text-2xl text-center font-bold">Ваш заказ</p>
                    <div className="flex justify-between mt-6 font-bold">
                        <p className="text-base">товар</p>
                        <p className="text-base">подытог</p>
                    </div>
                    <hr className="border-[#D32B82]" />
                    <div className="flex flex-col mt-4">
                        {items.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="flex justify-between mb-3"
                            >
                                <p className="text-sm text-[#D32B82]">
                                    {item.title}({item.count})
                                </p>
                                <p className="text-sm text-[#878787]">
                                    {item.price * item.count} AED
                                </p>
                            </div>
                        ))}
                    </div>
                    <hr className="border-[#D32B82] border-b border-dashed mt-10" />
                    <div className="flex justify-between my-3">
                        <p className="text-xl font-bold">Итого: </p>
                        <p className="text-lg font-semibold text-[#D32B82]">
                            {totalPrice} AED
                        </p>
                    </div>
                    <Form.Item
                        name="payment"
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, выберите способ оплаты!',
                            },
                        ]}
                    >
                        <Select
                            placeholder="Выберите способ оплаты"
                            style={{ width: 300 }}
                        >
                            <Select.Option value="наличными">
                                Наличными курьеру
                            </Select.Option>
                            <Select.Option value="картой">
                                Картой курьеру
                            </Select.Option>
                        </Select>
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="flex justify-center mt-5"
                    >
                        ПОДТВЕРДИТЬ ЗАКАЗ
                    </Button>
                </div>
            </div>
        </Form>
    )
}
