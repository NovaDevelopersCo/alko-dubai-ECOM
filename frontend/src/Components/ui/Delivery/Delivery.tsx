import React from 'react'
import Container from '@/Components/ui/Container/Container'
import Image from 'next/image'
const Delivery: React.FC = () => {
  return (
    <Container>
      <h1 className="mt-20 mb-10 text-2xl font-normal leading-9">
        ДОСТАВКА И ОПЛАТА
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pb-10 mb-10 ">
        <div className="text-center flex border border-rose-300 p-8 items-center rounded-tl-lg rounded-tr-lg md:rounded-tr-[0]">
          <div className="font-medium text-2xl  text-black text-left">
            Бесплатная доставка 24 <br /> часа ежедневно
          </div>
          <div className="text-4xl text-black flex  items-center ml-auto">
            <Image src="/the-clock.svg" alt="time" width={70} height={70} />
          </div>
        </div>
        <div className="text-center flex border border-rose-300 p-8 items-center rounded-tr-[0] md:rounded-tr-lg">
          <div className="font-medium text-2xl  text-black text-left ">
            Доставка по городу <br /> и за его пределами
          </div>
          <div className="text-4xl text-black flex ml-auto">
            <Image src="/quest_city.svg" alt="time" width={70} height={70} />
          </div>
        </div>
        <div className="text-center flex border border-rose-300 p-8 items-center rounded-bl-[0] md:rounded-bl-lg">
          <div className="font-medium text-2xl  text-black text-left ">
            Срок выполнения заказа —<br />
            30-40 минут
          </div>
          <div className="text-4xl text-black flex  items-center ml-auto">
            <Image src="/timer.svg" alt="time" width={70} height={70} />
          </div>
        </div>

        <div className="text-center flex border border-rose-300 p-8 items-center rounded-br-lg rounded-bl-lg md:rounded-bl-[0] ">
          <div className="font-medium text-2xl   text-black text-left ">
            Оплата заказа при <br /> получении наличными
            <br /> или переводом на карту РФ
          </div>
          <div className="text-4xl text-black flex ml-auto">
            <Image src="/money.svg" alt="time" width={70} height={70} />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Delivery
