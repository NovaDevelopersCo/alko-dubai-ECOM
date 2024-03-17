import Container from '@/Components/ui/Container/Container'
import Swaiper from '@/Components/ui/Swaiper/Swaiper'
import CategoryPhoto from '@/Components/ui/CategoryPhoto/CategoryPhoto'
import { Item } from '@/Components/entity/item'
import OurBenefits from '@/Components/ui/ourBenefits/OurBenefits'
import MainPageSort from '@/Components/ui/MainPageSort/MainPageSort'
import { Text } from '@/Components/ui/Text/Text'

export default function Home() {
    const SLIDE_COUNT = 12
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
            <Container>
                <Swaiper />
                <CategoryPhoto slides={SLIDES} />
                <div className="md:mx-16">
                    <MainPageSort />
                    <Item disabled={false} />
                </div>
            </Container>
            <OurBenefits />
            <Text />
            {/*<Container>*/}
            {/*      */}
            {/*  </Container>*/}
        </>
    )
}
