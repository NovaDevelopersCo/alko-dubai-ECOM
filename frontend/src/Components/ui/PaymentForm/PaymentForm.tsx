'use client'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'

export default function PaymentForm() {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    }

    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    }
    /* eslint-enable no-template-curly-in-string */

    const onFinish = (values: any) => {
        console.log(values)
    }
    return (
        <div>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={'name'}
                    label="Имя"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={'email'}
                    label="Почта"
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
                    <Select placeholder="Выберите способ оплаты">
                        <Option value="Cash">Наличными курьеру</Option>
                        <Option value="Card">Картой курьеру</Option>
                    </Select>
                </Form.Item>
                <Form.Item name={'details'} label="Примечания к заказу">
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
