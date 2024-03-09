import React from 'react'
import Container from '../Container/Container'

const Sort = () => {
    return (
        <div>
            <hr className="border-[#D32B82]" />
            <Container>
                <p className="text-xl text-center sm:text-right">
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
            </Container>
            <hr className="border-[#D32B82]" />
        </div>
    )
}

export default Sort
