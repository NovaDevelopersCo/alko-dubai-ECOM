"use client"
import Container from '@/Components/ui/Container/Container'
import EmptyCart from '@/Components/ui/ProductTable/EmptyCart'
import { ProductTable } from '@/Components/ui/ProductTable/ProductTable'
import { Total } from '@/Components/ui/Total/Total'
import { selectCart } from '@/lib/features/cart/cart'
import { useAppSelector } from '@/lib/hooks'
import React from 'react'

const CartPage = () => {
    const { items } = useAppSelector(selectCart)
    return (
        <div>
            <Container additionalStyles="pb-20 pt-[74px]">
                {items.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <div className="grid lg:grid-cols-[3fr_1fr] md:grid-cols-1 gap-[10px] items-center">
                        <span className="flex-1">
                            <ProductTable />
                        </span>
                        <span className="mt-[60px] flex justify-center">
                            <Total />
                        </span>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default CartPage
