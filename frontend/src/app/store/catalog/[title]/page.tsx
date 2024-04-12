import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import MainStore from '@/Components/ui/MainStore/MainStore'
import Sort from '@/Components/ui/Sort/Sort'
import React from 'react'
import type { Metadata} from 'next'

type Props = {
    params: { id: string }
}

export function generateMetadata({ params }: Props): Metadata {
    // read route params
    const title = params.id

    return {
        title: title,
        description: title,
        openGraph: {
            images: [
                'https://i.pinimg.com/564x/73/6f/4f/736f4f807530749cf4859d41a03fce51.jpg',
            ],
            siteName: 'АлкоДубай',
            title: title,
            description: title,
        },
    }
}

export default function page() {
    return (
        <>
            <Sort />
            <Container>
                <div className="flex w-full h-full">
                    <Catalog />
                    <div className="w-full h-full my-6">
                        <MainStore />
                    </div>
                </div>
            </Container>
        </>
    )
}
