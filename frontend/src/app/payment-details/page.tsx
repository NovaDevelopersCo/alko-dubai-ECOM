'use client'
import Container from '@/Components/ui/Container/Container'
import PaymentForm from '@/Components/ui/PaymentForm/PaymentForm'
import React from 'react'

export default function page() {
    return (
        <Container>
            <div className="flex justify-between">
                <p>Детали оплаты</p>
                <PaymentForm />
            </div>
        </Container>
    )
}
