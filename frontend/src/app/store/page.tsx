import { Item } from '@/Components/entity/item'
import { CartMenu } from '@/Components/ui/CartMenu/CartMenu'
import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import Sort from '@/Components/ui/Sort/Sort'
import React from 'react'

const store = () => {
    return (
        <>
            <Sort />
            <Container>
                <div className="flex w-full h-full">
                    <Catalog />
                    <div className="w-full h-full my-6">
                        <Item disabled={false} />
                    </div>
                </div>
                <CartMenu />
            </Container>
        </>
    )
}

export default store
