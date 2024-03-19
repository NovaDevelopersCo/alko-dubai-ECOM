export const Total = () => {
    return (
        <div className="w-[329px] border border-customPink rounded-[15px] p-[25px] flex flex-col justify-center">
            <span className="font-semibold text-[18px] lg:text-[22px] md:text-[20px] sm:text-[18px]">
                Сумма заказа
            </span>
            <div className="flex justify-between border-b-[1px] border-customPink pt-[15px] pb-[12px]">
                <span className="text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">
                    Подытог
                </span>
                <span className="text-[#878787] text-[14px] lg:text-[16px] md:text-[15px] sm:text-[14px]">
                    650 AED
                </span>
            </div>
            <div className="flex justify-between pt-[35px] pb-[46px]">
                <span className="font-semibold text-[16px] lg:text-[20px] md:text-[18px] sm:text-[16px]">
                    Итого
                </span>
                <span className="font-semibold text-customPink text-[18px] lg:text-[20px] md:text-[19px] sm:text-[18px]">
                    650 AED
                </span>
            </div>
            <button className="p-[12px_68px] transition-all duration-200 bg-customPink hover:bg-opacity-90 active:bg-opacity-100 text-[#fff] rounded-[15px] block lg:hidden md:hidden sm:block">
                Оформить заказ
            </button>
        </div>
    )
}
