'use client'
import { Item } from '@/Components/entity/item'
import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import Sort from '@/Components/ui/Sort/Sort'
import React, {useState} from 'react'

const store = () => {
    const [layoutCount, setLayoutCount ]=useState<number>(4)
    console.log(layoutCount)
    return (
        <>
            <Sort setLayoutCount={setLayoutCount} />
            <Container>
                <div className="flex w-full h-full">
                    <Catalog />
                    <div className="w-full h-full my-6">
                        <Item layoutCount={layoutCount} disabled={false}/>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default store
