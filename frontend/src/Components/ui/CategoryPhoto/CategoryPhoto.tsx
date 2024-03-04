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
  

  return (
    <section className="embla max-w-70rem mx-auto">
      <div
        className="embla__viewport overflow-hidden w-full h-96 md:h-auto"
        ref={emblaRef}
      >
        <div className="embla__container flex touch-action: pan-y">
          {Object.keys(categories).map((index) => (
            <div
              className="embla__slide min-w-0 shadow-inset-0.2rem flex-0 items-center justify-center rounded-1.8rem flex-shrink-0 w-1/2 px-2 md:w-1/8 lg:w-1/8 xl:w-1/8 mt-3"
              key={index}
            >
              <img className="w-full h-auto" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALQAvwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQYD/8QAGBABAQEBAQAAAAAAAAAAAAAAAAFRExH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A13t2nt2oAvt2nt2oAvt2nt2oAvt2nt2oAvt2nt2oAvt2nt2oAvt2nt2oAvt2nt2oAvt2nt2oAvt2nt2oAvt2nt2oAvt2nt2oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA685tOc2qAnObTnNqgJzm05zaoCc5tOc2qAnObTnNqgJzm05zaoCc5tOc2qAnObTnNqgJzm05zaoCc5tOc2qAnObTnNqgJzm05zaoD//2Q=="/>
              <p className="embla__slide__number p-2 text-xs sm:text-sm md:text-lg xl:text-xl font-semibold text-center">
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
