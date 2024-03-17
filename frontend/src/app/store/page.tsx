import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import MainStore from '@/Components/ui/MainStore/MainStore'
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
                        <MainStore></MainStore>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default store
