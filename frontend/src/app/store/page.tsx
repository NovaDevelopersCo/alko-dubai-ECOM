import { Item } from '@/Components/entity/item'
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
                    <div className="w-max h-full">
                        <Item />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default store
