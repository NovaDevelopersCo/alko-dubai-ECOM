import { Button } from 'antd'
import Container from '@/Components/ui/Container/Container'
import Swaiper from '@/Components/ui/Swaiper/Swaiper'
import { EmblaOptionsType } from 'embla-carousel'
import CategoryPhoto from '@/Components/ui/CategoryPhoto/CategoryPhoto'
export default function Home() {
  const SLIDE_COUNT = 12
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <Container>
      <Swaiper />
      <CategoryPhoto slides={SLIDES} />
    </Container>
  )
}
