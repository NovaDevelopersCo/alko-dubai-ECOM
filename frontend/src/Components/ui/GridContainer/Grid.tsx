import React, { ReactNode } from 'react'

interface ProductsGridProps {
    children: ReactNode
    gridCount?: number // Сделали gridCount необязательным
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ children, gridCount }) => {

    const gridClass = ()=>{
        // Проверяем gridCount на undefined и присваиваем ему значение по умолчанию, если оно не определено
        switch (gridCount){
            case 2: return 'lg:grid-cols-2 md:grid-cols-2 grid-cols-2'
            case 3: return 'lg:grid-cols-3 md:grid-cols-3 grid-cols-2'
            case 4: return 'lg:grid-cols-4 md:grid-cols-4 grid-cols-2'
            default:return 'lg:grid-cols-4 md:grid-cols-4 grid-cols-2'
        }
    }
    return (
        <div className={`grid ${gridClass()} gap-4`}>
            {children}
        </div>
    )
}

export default ProductsGrid
