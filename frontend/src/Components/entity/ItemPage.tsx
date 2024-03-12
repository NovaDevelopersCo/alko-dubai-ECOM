'use client'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useParams } from 'next/navigation'
import { fetchItemById, selectItem } from '@/lib/features/items/items'
import Container from '@/Components/ui/Container/Container'

const ItemPage = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>() 
  const item = useAppSelector(selectItem)
  console.log(item)

  useEffect(() => {
    dispatch(fetchItemById(id)) // Convert id to number using Number function
  }, [dispatch, id])

  // useEffect(() => {
  //     // Сохраняем количество в localStorage при каждом изменении
  //     localStorage.setItem('quantity', String(quantity));
  // }, [quantity]);

  // const handleIncrement = () => {
  //     setQuantity((prevQuantity) => prevQuantity + 1);
  // };
  //
  // const handleDecrement = () => {
  //     if (quantity > 1) {
  //         setQuantity((prevQuantity) => prevQuantity - 1);
  //     }
  // };

  return (
    <Container>
      <article>
        <figure>
          <div className="flex flex-wrap justify-center">
            <div className="w-1/3 min-w-[206px] min-h-[250px]">
              <img
                src={item?.image}
                alt="png"
                className="w-full ml-0"
                width={384}
                height={510}
              />
            </div>
            <div className="mt-28 ml-auto">
              <span className="opacity-70 text-3xl ">
                {item?.title}
              </span>
              <div className="font-bold text-customPink mt-6">
                <span className="text-3xl font-bold line-through text-customGray mr-1">
                  <span>120 AED </span>
                </span>
                <span className="text-3xl"> 1213 AED</span>
              </div>
              <div className="flex mt-7 mb-16">
                <div className="flex items-center mr-4">
                  <button className="w-5 text-2xl border-2 border-customPink rounded-l-lg">
                    -
                  </button>
                  <span className="text-lg border-t-2 border-b-2 border-customPink w-7 py-0.5 px-1.5">
                    1
                  </span>
                  <button className=" w-5 text-2xl border-2 border-customPink rounded-r-lg ">
                    +
                  </button>
                </div>
                <button className="text-base font-semibold bg-customPink text-white py-3 px-14 rounded-3xl">
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </figure>
      </article>
    </Container>
  )
}

export default ItemPage
