import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import React from 'react'

const store = () => {
    return (
        <Container>
            <div className="flex w-full h-full">
                <Catalog />
                <div className="w-48 h-full"></div>
            </div>
        </Container>
    )
}

export default store
