import React, { ReactNode } from 'react'

interface ProductsGridProps {
    children: ReactNode
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ children }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {children}
        </div>
    )
}

export default ProductsGrid
