import Container from '@/Components/ui/Container/Container'

const order = () => {
    return (
        <Container>
            <div className="my-[20px] flex flex-col gap-[40px]">
                <h2 className="p-[20px_10px] border-dashed border border-customPink font-bold text-center text-[36px] text-customPink">
                    Ваш заказ принят. Благодарим Вас.
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px]">
                    <div className="text-center">
                        <p className="text-[16px] text-customGray font-semibold">
                            Номер заказа:
                        </p>
                        <p className="text-[15px] font-semibold">1000</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] text-customGray font-semibold">
                            Дата:
                        </p>
                        <p className="text-[15px] font-semibold">01.01.2024</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] text-customGray font-semibold">
                            Итого:
                        </p>
                        <p className="text-[15px] font-semibold">250 AED</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[16px] text-customGray font-semibold">
                            Способ оплаты:
                        </p>
                        <p className="text-[15px] font-semibold">
                            Оплата при доставке
                        </p>
                    </div>
                </div>
                <div className="text-center text-customGray font-semibold">
                    Оплата наличными при доставке заказа
                </div>
                <div className="flex flex-col">
                    <h2 className="text-[36px] text-customPink">
                        Информация о заказе
                    </h2>
                    <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">ТОВАР</span>
                        <span className="font-bold">ИТОГО</span>
                    </div>
                    <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">Водка</span>
                        <span className="text-customGray font-semibold">
                            100 AED
                        </span>
                    </div>
                    <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">Водка</span>
                        <span className="text-customGray font-semibold">
                            100 AED
                        </span>
                    </div>
                    <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">Подытог:</span>
                        <span className="text-customPink font-semibold">
                            200 AED
                        </span>
                    </div>
                    <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">Способ оплаты:</span>
                        <span className="text-customGray font-semibold">
                            Оплата при доставке
                        </span>
                    </div>
                    <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">Итого:</span>
                        <span className="text-customPink font-semibold">
                            200 AED
                        </span>
                    </div>
                    <div className="flex justify-between border-b-[1px] border-customGray p-[10px]">
                        <span className="font-bold">ПРИМЕЧАНИЕ:</span>
                        <span className="text-customGray">test</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default order
