import {
    selectFilter,
    setCategory,
    setSearch,
} from '@/lib/features/filter/filter'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Search() {
    const pathname = usePathname()
    const dispatch = useAppDispatch()
    const filter = useAppSelector(selectFilter) // Получаем параметры фильтрации из хранилища
    const router = useRouter()
    const onSubmit = (e: any) => {
        e.preventDefault()
        const searchInput = document.getElementById(
            'default-search',
        ) as HTMLInputElement
        dispatch(setCategory(''))
        dispatch(setSearch(searchInput.value))
        if (pathname !== '/store') {
            router.push('/store')
        }
    }
    useEffect(() => {
        if (filter.search === '') {
            const searchInput = document.getElementById(
                'default-search',
            ) as HTMLInputElement
            searchInput.value = ''
        }
    })
    return (
        <form
            className="max-w-md mx-auto hidden justify-between items-center w-full sm:flex sm:w-auto"
            id="mobile-menu-2"
            onSubmit={(e) => onSubmit(e)}
        >
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium  sr-only text-white"
            >
                Search
            </label>
            <div className="relative">
                <input
                    type="search"
                    id="default-search"
                    className="block placeholder-customPink rounded-tr rounded-br text-customPink border-customPink w-4/5 p-1 ps-5 text-sm border-2 rounded-2xl "
                    placeholder="Поиск по товарам"
                    required
                />
                <button
                    type="submit"
                    className="text-white absolute end-0 bottom-0 border-l-0 border-2 border-customPink rounded-tr-0 rounded-br-0 rounded-tl rounded-bl font-medium rounded-2xl text-sm px-3 py-1.5"
                >
                    <svg
                        className="w-4 h-4 text-customPink"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default Search
