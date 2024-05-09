import React from 'react'
import Delivery from '@/Components/ui/Delivery/Delivery'

import type { Metadata, ResolvingMetadata } from 'next'

export async function generateMetadata(
    parent: ResolvingMetadata,
): Promise<Metadata> {
    const previousImages = (await parent).openGraph?.images || []
    return {
        title: 'Доставка - Магазин АлкоДубай ',
        description:
            'Магазин алкоголя АлкоДубай, где вы можите заказать алкоголь на любой вкус и получить быструю доставку',
        openGraph: {
            siteName: 'АлкоДубай',
            images: [...previousImages],
            title: 'Доставка - АлкоДубай',
            description:
                'Магазин алкоголя АлкоДубай, где вы можите заказать алкоголь на любой вкус и получить быструю доставку',
        },
    }
}

const delivery = () => {
    return (
        <div>
            <Delivery />
        </div>
    )
}

export default delivery
