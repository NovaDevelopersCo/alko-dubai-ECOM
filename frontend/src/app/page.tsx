import Container from '@/Components/ui/Container/Container'
import Swaiper from '@/Components/ui/Swaiper/Swaiper'
import CategoryPhoto from '@/Components/ui/CategoryPhoto/CategoryPhoto'
import { Item } from '@/Components/entity/item'
import OurBenefits from '@/Components/ui/ourBenefits/OurBenefits'
export default function Home() {
  const SLIDE_COUNT = 12
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>
      <Container>
        <Swaiper />
        <CategoryPhoto slides={SLIDES} />
        <div className="md:mx-16">
          <Item disabled={true} />
        </div>
      </Container>
      <OurBenefits />
      {/*<Container>*/}
      {/*      */}
      {/*  </Container>*/}
    </>
  )
}
