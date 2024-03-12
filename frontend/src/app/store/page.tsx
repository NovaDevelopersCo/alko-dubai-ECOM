import { Item } from '@/Components/entity/item'
import Catalog from '@/Components/ui/Catalog/Catalog'
import Container from '@/Components/ui/Container/Container'
import Sort from '@/Components/ui/Sort/Sort'
import { Pagination } from 'antd'
import React from 'react'

const store = () => {
    return (
        <>
            <Sort />
            <Container>
                <div className="flex w-full h-full">
                    <Catalog />
                    <div className="w-max h-full my-6">
                        <Item />
                        <div className="mt-6">
                            <Pagination
                                disabled={true}
                                className="text-center"
                                showSizeChanger={false}
                                pageSize={10}
                                total={500}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default store
