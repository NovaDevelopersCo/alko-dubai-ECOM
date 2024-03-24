import Container from '@/Components/ui/Container/Container'
import { ProductTable } from '@/Components/ui/ProductTable/ProductTable'
import { Total } from '@/Components/ui/Total/Total'
import React from 'react';

const CartPage = () => {
    return (
        <div>
            <Container additionalStyles="pb-20 pt-[74px]">
                <div className="grid lg:grid-cols-[3fr_1fr] md:grid-cols-1 gap-[10px] items-center">
                    <span className="flex-1">
                        <ProductTable />
                    </span>
                    <span className="mt-[60px] flex justify-center">
                        <Total />
                    </span>
                </div>
            </Container>
        </div>
    )
}

export default CartPage
