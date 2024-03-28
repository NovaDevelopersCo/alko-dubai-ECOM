'use client'
import { CartMenu } from '@/Components/ui/CartMenu/CartMenu'
import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import MainStore from '@/Components/ui/MainStore/MainStore'
import Sort from '@/Components/ui/Sort/Sort'
import React, { useState } from 'react'

import type { Metadata } from 'next'

export function generateMetadata():Metadata {
    return {
        title: 'Магазин АлкоДубай',
        description:
            'Магазин алкоголя АлкоДубай, где вы можите заказать алкоголь на любой вкус и получить быструю доставку',
        openGraph: {
            images: [
                'https://i.pinimg.com/564x/73/6f/4f/736f4f807530749cf4859d41a03fce51.jpg',
            ],
            siteName: 'АлкоДубай',
            title: 'Магазин АлкоДубай',
            description:
                'Магазин алкоголя АлкоДубай, где вы можите заказать алкоголь на любой вкус и получить быструю доставку',
        },
    }
}

const store = () => {
    const [gridCount, setGridCount] = useState(4)
    const [limit, seLimit] = useState(9)
    return (
        <>
            <Sort
                limit={limit}
                setLimit={seLimit}
                gridCount={gridCount}
                setGridCount={setGridCount}
            />
            <Container>
                <div className="flex w-full h-full">
                    <Catalog />
                    <div className="w-full h-full my-6">
                        <MainStore
                            limit={limit}
                            gridCount={gridCount}
                        ></MainStore>
                    </div>
                </div>
                <CartMenu />
            </Container>
        </>
    )
}

export default store
