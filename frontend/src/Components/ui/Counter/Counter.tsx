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
                className="border border-customPink w-[24px] h-[36px]  rounded-l-[15px] text-[20px] hover:bg-customPink transition-all duration-100 font-extralight font-montserrat flex justify-center items-center"
                onClick={decrement}
            >
                -
            </span>
            <span className="border border-customPink text-[20px] outline-none w-[28px] h-[36px] font-extralight font-montserrat p-[0_10px] flex justify-center items-center">
                {value}
            </span>
            <span
                className="border border-customPink w-[24px] h-[36px] rounded-r-[15px] text-[20px] hover:bg-customPink transition-all duration-100 text-center font-extralight font-montserrat flex justify-center items-center"
                onClick={increment}
            >
                +
            </span>
        </div>
    )
}
