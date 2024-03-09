import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import React from 'react'

const store = () => {
    return (
        <>
            <div>
                <hr className="border-[#D32B82]" />
                <Container>
                    <p className="text-xl text-center sm:text-right">
                        Сортировка по
                        <select
                            name="sort-by"
                            className="ml-2 text-[#D32B82] rounded"
                        >
                            <option value="asc" className="rounded">
                                цене (возрастание)
                            </option>
                            <option value="desc" className="rounded">
                                цене (убывание)
                            </option>
                            <option value="news" className="rounded">
                                новизне
                            </option>
                            <option value="popularity" className="rounded">
                                популярности
                            </option>
                        </select>
                    </p>
                </Container>
                <hr className="border-[#D32B82]" />
            </div>
            <Container>
                <div className="flex w-full h-full">
                    <Catalog />
                    <div className="w-48 h-full"></div>
                </div>
            </Container>
        </>
    )
}

export default store
