export const Total = () => {
    return (
        <div className="w-[329px] border border-customPink rounded-[15px] p-[25px]">
            <span className="font-semibold text-[22px]">Сумма заказа</span>
            <div className="flex justify-between border-b-[1px] border-customPink pt-[15px] pb-[12px]">
                <span>Подытог</span>
                <span className="text-[#878787]">650 AED</span>
            </div>
            <div className="flex justify-between pt-[35px] pb-[46px]">
                <span className="font-semibold text-[20px]">Итого</span>
                <span className="font-semibold text-customPink">650 AED</span>
            </div>
        </div>
    )
}
