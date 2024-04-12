import React from 'react'
import ItemPage from '@/Components/entity/ItemPage'
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const id = params.id

    const product = await fetch(`https://alkodostavka-dubai.ru/api/items/${id}`).then(
        (res) => res.json(),
    )

    const previousImages = (await parent).openGraph?.images || []

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: product.title,
            siteName: 'АлкоДубай',
            description: product.description,
            images: [product.image, ...previousImages],
        },
    }
}


const ItemDetail = () => {
    return (
        <div>
            <ItemPage />
        </div>
    )
}
export default ItemDetail
