export const Counter = ({
    value,
    increment,
    decrement,
}: {
    value: number
    increment: () => void
    decrement: () => void
}) => {
    return (
        <div className="flex items-center select-none">
            <span
                className="border border-customPink w-[20px] lg:w-[24px] md:w-[22px] sm:w-[20] h-[32px] lg:h-[36px] md:h-[34px] sm:h-[32px] rounded-l-[12px] lg:rounded-l-[15px] md:rounded-l-[15px] sm:rounded-l-[12px] hover:bg-customPink transition-all duration-100 font-extralight font-montserrat flex justify-center items-center text-[14px] lg:text-[20px] md:text-[16px] sm:text-[14px]"
                onClick={decrement}
            >
                -
            </span>
            <span className="border border-customPink text-[14px] lg:text-[20px] md:text-[16px] sm:text-[14px] outline-none w-[24px] lg:w-[28px] md:w-[26px] sm:w-[24px] h-[32px] lg:h-[36px] md:h-[34px] sm:h-[32px] font-extralight font-montserrat p-[0_10px] flex justify-center items-center">
                {value}
            </span>
            <span
                className="border border-customPink w-[20px] lg:w-[24px] md:w-[22px] sm:w-[20] h-[32px] lg:h-[36px] md:h-[34px] sm:h-[32px] rounded-r-[12px] lg:rounded-r-[15px] md:rounded-r-[15px] sm:rounded-r-[12px] hover:bg-customPink transition-all duration-100 text-center font-extralight font-montserrat flex items-center justify-center text-[14px] lg:text-[20px] md:text-[16px] sm:text-[14px]"
                onClick={increment}
            >
                +
            </span>
        </div>
    )
}
