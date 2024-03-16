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
            <div className="flex">
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
                        name="payment"
                        label="Способ оплаты"
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
                    <Form.Item
                        name={'details'}
                        label="Примечания к заказу"
                        style={{ width: 450 }}
                    >
                        <Input.TextArea />
                    </Form.Item>
                </div>
                <div className="w-full">AAAAAAAAAAAA</div>
            </div>
            <Button
                type="primary"
                htmlType="submit"
                className="w-full flex justify-center"
            >
                Submit
            </Button>
        </Form>
    )
}
