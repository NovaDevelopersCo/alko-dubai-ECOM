import Container from '@/Components/ui/Container/Container'
import Swaiper from '@/Components/ui/Swaiper/Swaiper'
import CategoryPhoto from '@/Components/ui/CategoryPhoto/CategoryPhoto'
import OurBenefits from '@/Components/ui/ourBenefits/OurBenefits'
import StartStore from '@/Components/ui/StartStore/StartStore'
export default function Home() {
    const SLIDE_COUNT = 12
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
            <Container>
                <Swaiper />
                <CategoryPhoto slides={SLIDES} />
                <div className="md:mx-16">
                    <StartStore></StartStore>
                </div>
            </Container>
            <OurBenefits />
            {/*<Container>*/}
            {/*      */}
            {/*  </Container>*/}
        </>
    )
}
