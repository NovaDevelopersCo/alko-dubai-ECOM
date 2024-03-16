'use client'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'

export default function PaymentForm() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    }

    const onFinish = (values: any) => {
        console.log(values)
    }
    return (
        <div>
            <Form
                {...layout}
                name="order"
                onFinish={onFinish}
                style={{ maxWidth: 1280, marginTop: 100 }}
            >
                <Form.Item
                    name={'name'}
                    label="Имя"
                    style={{ maxWidth: 300 }}
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'email'}
                    label="Почта"
                    style={{ maxWidth: 300 }}
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
                    style={{ maxWidth: 300 }}
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
                    style={{ maxWidth: 650 }}
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите ваш адрес!',
                        },
                    ]}
                >
                    <Input style={{ width: '100%' }} />
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
                        style={{ maxWidth: 300 }}
                    >
                        <Option value="Cash">Наличными курьеру</Option>
                        <Option value="Card">Картой курьеру</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name={'details'}
                    label="Примечания к заказу"
                    style={{ maxWidth: 650 }}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
