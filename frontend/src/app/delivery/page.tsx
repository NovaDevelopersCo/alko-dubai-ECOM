import React from 'react'
import Delivery from '@/Components/ui/Delivery/Delivery'

import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        metadataBase: new URL('http://localhost:3000'),
        title: 'Доставка - Магазин АлкоДубай ',
        description:
            'Магазин алкоголя АлкоДубай, где вы можите заказать алкоголь на любой вкус и получить быструю доставку',
        openGraph: {
            images: ['/moto.jpg'],
            siteName: 'АлкоДубай',
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
