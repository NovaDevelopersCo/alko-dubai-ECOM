import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import { useContext, useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { RootState } from '@/lib/store'
import { useParams } from 'next/navigation'
import { setCategory } from '@/lib/features/filter/filter'
import { fetchCategories } from '@/lib/features/categories/categories'
import { BurgerContext } from '@/Components/context/AppContext'

export const CatalogLinks = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useContext(BurgerContext) // eslint-disable-line no-unused-vars
    const params = useParams<{ title: string }>()
    useEffect(() => {
        if (params.title) {
            dispatch(setCategory(decodeURI(params.title)))
        }
    }, [])
    const [width, setWidth] = useState(true)
    let flag = false
    const dispatch = useAppDispatch()
    const categories = useAppSelector(
        (state: RootState) => state.categories.posts,
    ) as any
    const categoriesArray = Array.from(categories) as {
        title: string
        items: number
    }[]
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', function resizeHandler() {
            if (window.innerWidth < 1024 && !flag && width) {
                setWidth(false)
                flag = true
            } else if (window.innerWidth >= 1024 && flag && width) {
                setWidth(true)
                flag = false
            }
        })
    }

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    const handleCategoryClick = () => {
        setIsBurgerOpen(false)
    }

    return (
        <div className="flex flex-col gap-3 mt-5 lg:hidden scroll-container">
            {categoriesArray.length > 0 ? (
                categoriesArray.map((category, id) => (
                    <Link
                        href={`/store/catalog/${category.title}`}
                        className="flex justify-between items-center"
                        key={id}
                        onClick={() => {
                            handleCategoryClick()
                            dispatch(setCategory(category.title))
                        }}
                    >
                        <div>{category.title}</div>
                        <div className="border-solid flex justify-center min-w-10 w-10 h-7 border-2 rounded-full border-[#D32B82]">
                            <p>{category.items}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <div className="flex justify-between flex-col w-full">
                    <Skeleton
                        width={250}
                        height={30}
                        count={7}
                        className="block my-3"
                    />
                </div>
            )}
        </div>
    )
}
