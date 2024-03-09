import React from 'react'
import Container from '../Container/Container'

const Sort = () => {
    return (
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
    )
}

export default Sort
