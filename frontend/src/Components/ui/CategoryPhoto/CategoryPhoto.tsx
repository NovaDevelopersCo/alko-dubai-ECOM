'use client'
import React, { MouseEvent, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchCategories } from '@/lib/features/categories/categories'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { RootState } from '@/lib/store'
import { setCategory } from '@/lib/features/filter/filter'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const CategoryPhoto: React.FC<PropType> = (props) => {
    const { slides, options } = props // eslint-disable-line no-unused-vars
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        dragFree: true,
    })

    const dispatch = useAppDispatch()
    const categories = useAppSelector(
        (state: RootState) => state.categories.posts,
    ) as any

    const categoriesArray = Array.from(categories) as {
        title: string
        image: string
    }[]

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
                    {Object.keys(categoriesArray).length > 1 ? (
                        categoriesArray.map((category, index) => (
                            <Link
                                key={index}
                                href={`/store/catalog/${category.title}`}
                                onClick={(
                                    event: MouseEvent<HTMLAnchorElement>,
                                ) => {
                                    dispatch(setCategory(category.title))
                                    event as unknown as MouseEvent<HTMLAnchorElement>
                                }}
                            >
                                <div
                                    className="embla__slide min-w-0 rounded-md shadow-inset-0.2rem flex-0 items-center justify-center rounded-1.8rem flex-shrink-0 w-32 lg:w-40 xl:w-44 max-w-48 my-3 "
                                    key={index}
                                >
                                    <img
                                        className="w-full max-h-44 object-contain h-auto rounded-md"
                                        src={category.image}
                                        alt={category.title} // добавлен alt для изображения
                                    />
                                    <p className="embla__slide__number p-2 text-xs sm:text-xs md:text-sm xl:text-base font-semibold text-center">
                                        {category.title}
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="flex justify-between w-full">
                            {Array.from({ length: 6 }, (_, index) => (
                                <div className="flex flex-col" key={index}>
                                    <Skeleton
                                        width={150}
                                        height={150}
                                        className="rounded my-3"
                                    />
                                    <Skeleton
                                        width={150}
                                        height={30}
                                        className="rounded my-3"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CategoryPhoto
