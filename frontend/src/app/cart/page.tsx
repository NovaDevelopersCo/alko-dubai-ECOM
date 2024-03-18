import Container from '@/Components/ui/Container/Container'
import { ProductTable } from '@/Components/ui/ProductTable/ProductTable'
import { Total } from '@/Components/ui/Total/Total'
import { SearchProduct } from '@/Components/ui/SearchProduct/SearchProsuct'

const CartPage = () => {
    return (
        <div>
            <span className="flex items-center border-t-[1px] border-b-[1px] border-customPink py-[17px] px-[65px] gap-[18px]">
                Найти продукт
                <span className="text-start">
                    <SearchProduct />
                </span>
            </span>
            <Container additionalStyles="pb-20 pt-[74px]">
                <div className="grid lg:grid-cols-[3fr_1fr] md:grid-cols-1 gap-[10px]">
                    <span className="flex-1">
                        <ProductTable />
                    </span>
                    <span>
                        <Total />
                    </span>
                </div>
            </Container>
        </div>
    )
}

export default CartPage
