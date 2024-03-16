'use client'
import Container from '@/Components/ui/Container/Container'
import PaymentForm from '@/Components/ui/PaymentForm/PaymentForm'
import React from 'react'

export default function page() {
    return (
        <Container>
            <div className="flex justify-center lg:justify-between">
                <div className='w-full flex flex-col items-center mt-5'>
                    <PaymentForm />
                </div>
            </div>
        </Container>
    )
}
