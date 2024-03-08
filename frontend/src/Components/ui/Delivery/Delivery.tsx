import React from 'react';
import {FaClock, FaGift, FaTruck, FaMoneyBill} from 'react-icons/fa';
import Container from "@/Components/ui/Container/Container";

const Delivery: React.FC = () => {

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-10 my-10 ">
                <div className="text-center flex border border-rose-300 p-6 items-center rounded-tl-lg">
                    <div className="font-medium text-2xl  text-black text-left">Бесплатная доставка
                        24 <br/> часа
                        ежедневно
                    </div>
                    <div className="text-4xl text-black flex  items-center ml-auto">
                        <FaClock style={{color: '#D32B82'}}/>
                    </div>
                </div>
                <div className="text-center flex border border-rose-300 p-6 items-center rounded-tr-lg">
                    <div className="font-medium text-2xl  text-black text-left ">Доставка по городу <br/> и за
                        его
                        пределами
                    </div>
                    <div className="text-4xl text-black flex ml-auto">
                        <FaTruck style={{color: '#D32B82'}}/>
                    </div>
                </div>
                <div className="text-center flex border border-rose-300 p-6 items-center rounded-bl-lg">
                    <div className="font-medium text-2xl  text-black text-left ">Срок выполнения заказа —<br/>
                        30-40
                        минут
                    </div>
                    <div className="text-4xl text-black flex  items-center ml-auto">
                        <FaGift style={{color: '#D32B82'}}/>
                    </div>
                </div>

                <div className="text-center flex border border-rose-300 p-6 items-center rounded-br-lg">
                    <div className="font-medium text-2xl   text-black text-left ">Оплата заказа
                        при <br/> получении
                        наличными<br/> или
                        переводом на карту РФ
                    </div>
                    <div className="text-4xl text-black flex ml-auto">
                        <FaMoneyBill style={{color: '#D32B82'}}/>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Delivery;
