'use client'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'

export default function PaymentForm() {
    const onFinish = (values: any) => {
        console.log(values)
    }
    return (
        <Form name="order" onFinish={onFinish} style={{ marginTop: 50 }}>
            <div className="flex flex-col justify-between lg:flex-row">
                <div>
                    <Form.Item
                        name={'name'}
                        label="Имя"
                        style={{ width: 300 }}
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={'email'}
                        label="Почта"
                        style={{ width: 300 }}
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Пожалуйста, введите вашу почту!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Телефон"
                        style={{ width: 300 }}
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите ваш телефон!',
                            },
                        ]}
                    >
                        <Input style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item
                        name="adress"
                        label="Адрес"
                        style={{ width: 450 }}
                        rules={[
                            {
                                required: true,
                                message: 'Пожалуйста, введите ваш адрес!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={'details'}
                        label="Примечания к заказу"
                        style={{ width: 450 }}
                    >
                        <Input.TextArea />
                    </Form.Item>
                </div>
                <div className="w-[460px] bg-[#F3F3F2] flex flex-col justify-evenly px-5 mb-8">
                    <p className="text-2xl text-center font-bold">Ваш заказ</p>
                    <div className="flex justify-between mt-6 font-bold">
                        <p className="text-base">товар</p>
                        <p className="text-base">подытог</p>
                    </div>
                    <hr className="border-[#D32B82]" />
                    <hr className="border-[#D32B82] border-b border-dashed mt-10" />
                    <div className="flex justify-between my-3">
                        <p className="text-xl font-bold">Итого: </p>
                        <p className="text-lg font-semibold text-[#D32B82]">
                            650AED
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
                            <Option value="Cash">Наличными курьеру</Option>
                            <Option value="Card">Картой курьеру</Option>
                        </Select>
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="flex justify-center my-5"
                    >
                        ПОДТВЕРДИТЬ ЗАКАЗ
                    </Button>
                </div>
            </div>
        </Form>
    )
}
