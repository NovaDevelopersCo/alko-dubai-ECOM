import React from 'react';
import Image from "next/image";

const OurBenefits: React.FC = () => {
    return (
        <div className="bg-black py-10 my-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl text-white flex justify-center items-center h-20">
                            <Image src='/timing_bl.svg' alt="time" width={70} height={70} />
                        </div>
                        <div className="text-lg font-semibold mt-4 text-white">Доставка 24/7</div>
                        <div className="text-sm mt-2 text-gray-400">Доставка осуществляется ежедневно и круглосуточно</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl text-white flex justify-center items-center h-20">
                            <Image src='/guarantee.svg' alt="time" width={70} height={70} />
                        </div>
                        <div className="text-lg font-semibold mt-4 text-white">Гарантия качества</div>
                        <div className="text-sm mt-2 text-gray-400">Только качественные товары и услуги</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl text-white flex justify-center items-center h-20">
                            <Image src='/present.svg' alt="time" width={70} height={70} />

                        </div>
                        <div className="text-lg font-semibold mt-4 text-white">Подарки</div>
                        <div className="text-sm mt-2 text-gray-400">Различные подарки и бонусы для наших клиентов</div>
                    </div>
                    <div className="text-center mx-auto">
                        <div className="text-4xl text-white flex justify-center items-center h-20">
                            <Image src='logistics_van.svg' alt="time" width={70} height={70} />

                        </div>
                        <div className="text-lg font-semibold mt-4 text-white">Быстрая доставка</div>
                        <div className="text-sm mt-2 text-gray-400">Мы гарантируем быструю и надежную доставку</div>
                    </div>
                    <div className="text-center mx-auto">
                        <div className="text-4xl text-white flex justify-center items-center h-20">
                            <Image src='/logistics_selling.svg' alt="time" width={70} height={70} />

                        </div>
                        <div className="text-lg font-semibold mt-4 text-white">Удобная оплата</div>
                        <div className="text-sm mt-2 text-gray-400">Различные варианты оплаты для вашего удобства</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBenefits;
