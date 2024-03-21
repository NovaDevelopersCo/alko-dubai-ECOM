"use client"
import { selectCart } from '@/lib/features/cart/cart'
import { Product } from '../Product/Product'
import { useAppSelector } from '@/lib/hooks'
import { CartItem } from '@/type/interfaceCart'

export const ProductTable = () => {
    const { totalPrice, items } = useAppSelector(selectCart)
    const totalCount = items.reduce(
        (sum: number, item: any) => sum + item.count,
        0,
    )

    return (
        <div className="max-w-[858px]">
            <div className="hidden lg:grid md:grid sm:hidden grid-cols-[4fr_1fr_1.5fr_1fr] lg:grid-cols-[4fr_1fr_1.5fr_1fr] md:grid-cols-[5fr_1fr_1.5fr_1fr] sm:grid-cols-[4fr_1fr_1.5fr_1fr] border-b-[1px] border-customPink">
                <span className="text-center text-[18px] lg:text-[22px] md:text-[20px] sm:text-[18px] font-semibold pb-[5px]">
                    товар
                </span>
                <span className="pl-[0] lg:pl-[30px] md:pl-[5px] sm:pl-[0] text-[18px] lg:text-[22px] md:text-[20px] sm:text-[18px] font-semibold">
                    цена
                </span>
                <span className="text-center text-[18px] lg:text-[22px] md:text-[20px] sm:text-[18px] font-semibold pl-[0] lg:pl-[10px] md:pl-[0px] sm:pl-[0]">
                    количество
                </span>
                <span className="text-end text-[18px] lg:text-[22px] md:text-[20px] sm:text-[18px] font-semibold">
                    подытог
                </span>
            </div>
            <div className="flex flex-col gap-[50px] lg:gap-[0px] md:gap-[0px] sm:gap-[50px]">
                {items.map((obj: CartItem) => (
                    <Product key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    )
}
