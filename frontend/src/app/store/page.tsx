import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import React from 'react'

const store = () => {
    return (
        <>
            <div>
                <hr className="border-[#D32B82]" />
                <p className="text-xl text-center sm:text-right sm:mr-8">
                    Сортировка по
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </p>
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
