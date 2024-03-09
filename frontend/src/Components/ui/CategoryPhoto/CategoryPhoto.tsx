'use client'
import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchCategories } from '@/lib/features/categories/categories'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { RootState } from '@/lib/store'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const CategoryPhoto: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef] = useEmblaCarousel({
        dragFree: true,
        watchSlides: false,
        watchResize: false,
        loop: true,
    })

    const dispatch = useAppDispatch()
    const categories = useAppSelector(
        (state: RootState) => state.categories.posts,
    ) as any
    const categoriesArray = Array.from(categories) as { title: string }[]
    const titles = categoriesArray.map((category) => category.title)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <section className="embla max-w-70rem mx-auto">
            <div
                className="embla__viewport overflow-hidden w-full h-auto"
                ref={emblaRef}
            >
                <div className="embla__container flex touch-action: pan-y gap-4">
                    {titles.length > 1 ? (
                        titles.map((index) => (
                            <Link key={index} href={`/catalog/${index}`}>
                                <div
                                    className="embla__slide min-w-0 rounded-md shadow-inset-0.2rem flex-0 items-center justify-center rounded-1.8rem flex-shrink-0 w-32 lg:w-40 xl:w-44 max-w-48 my-3 "
                                    key={index}
                                >
                                    <img
                                        className="w-full max-h-44 object-contain h-auto rounded-md"
                                        src="https://simplewine.ru/upload/iblock/b82/b826c151bb826f2fd40fcbfc0d93ffaa.png"
                                    />
                                    <p className="embla__slide__number p-2 text-xs sm:text-xs md:text-sm xl:text-base font-semibold text-center">
                                        {index}
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="flex justify-between w-full">
                            {Array.from({ length: 6 }, (_, index) => (
                                <div className='flex flex-col'>
                                    <Skeleton
                                        width={150}
                                        height={150}
                                        className="rounded my-3"
                                        key={index}
                                    />
                                    <Skeleton
                                        width={150}
                                        height={30}
                                        className="rounded my-3"
                                        key={index}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
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
