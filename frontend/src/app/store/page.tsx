'use client'
import { CartMenu } from '@/Components/ui/CartMenu/CartMenu'
import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import MainStore from '@/Components/ui/MainStore/MainStore'
import Sort from '@/Components/ui/Sort/Sort'
import React, {useState} from 'react'

const store = () => {
    const [gridCount, setGridCount]=useState(4)
    const [limit, seLimit]=useState(9)
    return (
        <>
            <Sort limit={limit} setLimit={seLimit} gridCount={gridCount} setGridCount={setGridCount}/>
            <Container>
                <div className="flex w-full h-full">
                    <Catalog />
                    <div className="w-full h-full my-6">
                        <MainStore limit={limit} gridCount={gridCount}></MainStore>
                    </div>
                </div>
                <CartMenu />
            </Container>
        </>
    )
}

export default store
