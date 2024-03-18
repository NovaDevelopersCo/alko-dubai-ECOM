import { Product } from '../Product/Product'

export const ProductTable = () => {
    return (
        <div className="max-w-[858px]">
            <div className="grid grid-cols-[4fr_1fr_1.5fr_1fr] border-b-[1px] border-customPink">
                <span className="text-center text-[22px] font-semibold pb-[5px]">
                    товар
                </span>
                <span className="pl-[10px] text-[22px] font-semibold">
                    цена
                </span>
                <span className="text-center text-[22px] font-semibold">
                    количество
                </span>
                <span className="text-end text-[22px] font-semibold">
                    подытог
                </span>
            </div>
            <div>
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}
