import React from 'react'
import Container from '../Container/Container'

const Sort = () => {
    return (
        <div>
            <hr className="border-[#D32B82]" />
            <Container>
                <div className='flex justify-between items-center'>
                    <p className="md:hidden w-max">Фильтр <span className='font-bold text-[#D32B82]'>{'>'}</span></p>
                    <p className="text-md text-center w-max sm:text-right pr-2.5 rounded">
                        <select
                            name="sort-by"
                            className="rounded cursor-pointer before:bg-[#D32B82]"
                        >
                            <option value="asc" className="rounded">
                                Исходная сортировка
                            </option>
                            <option value="asc" className="rounded">
                                Цене (возрастание)
                            </option>
                            <option value="desc" className="rounded">
                                Цене (убывание)
                            </option>
                            <option value="news" className="rounded">
                                Новизне
                            </option>
                            <option value="popularity" className="rounded">
                                Популярности
                            </option>
                        </select>
                    </p>
                </div>
            </Container>
            <hr className="border-[#D32B82]" />
        </div>
    )
}

export default Sort
