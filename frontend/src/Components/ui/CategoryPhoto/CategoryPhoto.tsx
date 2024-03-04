'use client'
import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchCategories } from '@/lib/features/categories/categories'
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

  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.categories.posts)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  console.log(categories);
  

  return (
    <section className="embla max-w-70rem mx-auto">
      <div
        className="embla__viewport overflow-hidden w-full h-96 md:h-auto"
        ref={emblaRef}
      >
        <div className="embla__container flex touch-action: pan-y">
          {Object.keys(categories).map((index) => (
            <div
              className="embla__slide min-w-0 flex-0 flex-shrink-0 w-1/6 px-2 md:w-1/4 lg:w-1/6 xl:w-1/6"
              key={index}
            >
              <div className="embla__slide__number p-6 shadow-inset-0.2rem rounded-1.8rem text-4xl font-semibold flex items-center justify-center h-var(--slide-height)">
                {index}
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
