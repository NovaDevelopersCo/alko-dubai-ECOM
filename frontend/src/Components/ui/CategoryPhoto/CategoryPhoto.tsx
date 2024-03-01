'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const CategoryPhoto: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'keepSnaps',
    watchSlides: false,
    watchResize: false,
    loop: true,
  })

  return (
    <section className="embla max-w-70rem mx-auto">
      <div
        className="embla__viewport overflow-hidden w-full h-96 md:h-auto"
        ref={emblaRef}
      >
        <div className="embla__container flex touch-action: pan-y">
          {slides.map((index) => (
            <div
              className="embla__slide min-w-0 flex-0 flex-shrink-0 w-1/6 px-2 md:w-1/4 lg:w-1/6 xl:w-1/6"
              key={index}
            >
              <div className="embla__slide__number p-6 shadow-inset-0.2rem rounded-1.8rem text-4xl font-semibold flex items-center justify-center h-var(--slide-height)">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls grid grid-cols-auto-1fr gap-1.2rem mt-1.8rem">
        <div className="embla__buttons grid grid-cols-2 gap-0.6rem items-center"></div>

        <div className="embla__dots flex flex-wrap justify-end items-center mr-[-0.6rem]"></div>
      </div>
    </section>
  )
}

export default CategoryPhoto