import Container from '@/Components/ui/Container/Container'
import Swaiper from '@/Components/ui/Swaiper/Swaiper'
import CategoryPhoto from '@/Components/ui/CategoryPhoto/CategoryPhoto'
import OurBenefits from '@/Components/ui/ourBenefits/OurBenefits'
import { Text } from '@/Components/ui/Text/Text'
import StartStore from '@/Components/ui/StartStore/StartStore'

export default function Home() {
    const SLIDE_COUNT = 12
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
            <Container>
                <Swaiper />
                <CategoryPhoto slides={SLIDES} />
                <div>
                    <StartStore ></StartStore>
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
