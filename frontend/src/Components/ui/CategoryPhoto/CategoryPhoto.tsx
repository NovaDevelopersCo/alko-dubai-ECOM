'use client'
import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchCategories } from '@/lib/features/categories/categories'
import Skeleton from '@/Components/Skeleton/Skeleton'
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

  const items = Object.keys(categories).length > 1 ? categories : Array.from({ length: 6 }, (_, index) => <Skeleton key={index} />);

  return (
    <section className="embla max-w-70rem mx-auto">
      <div
        className="embla__viewport overflow-hidden w-full h-auto"
        ref={emblaRef}
      >
        <div className="embla__container flex touch-action: pan-y">
          {Object.keys(categories).map((index) => (
            <div
              className="embla__slide min-w-0 rounded-md shadow-inset-0.2rem flex-0 items-center justify-center rounded-1.8rem flex-shrink-0 w-1/2 px-2 sm:w-1/4 lg:w-1/6 xl:w-1/8 mt-3"
              key={index}
            >
              <img className="w-full h-auto rounded-md" src="https://e7.pngegg.com/pngimages/804/985/png-clipart-wine-glass-bottle-product-blueberry-hill-rose-glass-wine.png" />
              <p className="embla__slide__number p-2 text-xs sm:text-xs md:text-sm xl:text-base font-semibold text-center">
                {index}
              </p>
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
