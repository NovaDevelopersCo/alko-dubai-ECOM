import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import MainStore from '@/Components/ui/MainStore/MainStore'
import Sort from '@/Components/ui/Sort/Sort'
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
