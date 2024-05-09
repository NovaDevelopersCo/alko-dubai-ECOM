import React from 'react'
import Delivery from '@/Components/ui/Delivery/Delivery'

import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Доставка - Магазин АлкоДубай ',
        description:
            'Магазин алкоголя АлкоДубай, где вы можите заказать алкоголь на любой вкус и получить быструю доставку',
        openGraph: {
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
