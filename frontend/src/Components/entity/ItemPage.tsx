'use client'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { useParams } from 'next/navigation'
import { fetchItemById, selectItem } from '@/lib/features/items/items'
import Container from '@/Components/ui/Container/Container'
import Link from "next/link";
const ItemPage = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>() 
  const item = useAppSelector(selectItem)
  console.log(item)

  useEffect(() => {
    dispatch(fetchItemById(id)) // Convert id to number using Number function
  }, [])
  return (
      <Container>
        <article>
          <figure>
            <div className="flex flex-wrap justify-center">
              <div className="w-1/3 min-w-[206px] min-h-[250px] my-10 md:mr-auto ">
                <img
                    src={item?.image}
                    alt="png"
                    className="w-full ml-0"
                />
              </div>
              <div className="mt-28">
              <span className="opacity-70 text-3xl ">
                {item?.title}
              </span>
                <div className="font-bold text-customPink mt-6">
                <span className="text-3xl font-bold line-through text-customGray mr-1">
                  <span>{item?.oldPrice}AED </span>
                </span>
                  <span className="text-3xl"> {item?.price} AED</span>
                </div>
                <div className="flex mt-7 mb-16 ">
                  <div className="flex items-center mr-4">
                    <button className="w-5 text-2xl border-[1px] border-customPink rounded-l-lg">
                      -
                    </button>
                    <span className="text-lg border-t-[1px] border-b-[1px] border-customPink w-7 py-0.5 px-1.5">
                    1
                  </span>
                    <button className=" w-5 text-2xl border-[1px] border-customPink rounded-r-lg ">
                      +
                    </button>
                  </div>
                  <button className="text-base font-semibold bg-customPink text-white py-3 px-14 rounded-3xl">
                    В корзину
                  </button>
                </div>
                <div className="border-t-[1px] border-customPink md:min-w-20 flex">
                  <p className="mt-4 mr-2 text-lg font-medium">КАТЕГОРИЯ :</p> <p className="font-medium text-xl text-customGray mt-4">{item?.category}</p>
                </div>
              </div>
            </div>
          </figure>
        </article>
        <div className="border-b-[1px] border-customPink max-w-64 mt-28">
          <p className="mb-4 font-medium text-3xl">Похожие товары</p>
        </div>
        <ul className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24 mt-10">
          <Link href={`/store/${item?.id}`} key={item?.id} className=" p-4 rounded-md hover:shadow-md">
            <article>
              <figure>
                <img
                    src={item?.image}
                    alt="png"
                    className="w-full h-auto rounded-md"
                />
              </figure>
              <div className="mt-4 text-center">
                <span className="text-sm mb-2">{item?.category} </span>
                <span className="opacity-70 text-sm">{item?.title}</span>
                <p className=" font-bold text-customPink ">

                              <span className="text-sm font-bold line-through text-customGray ">

                                <span> AED </span>
                    </span>

                  {item?.price}
                  <span className="text-sm"> AED</span>
                </p>
              </div>
            </article>
          </Link>

        </ul>
      </Container>
  )
}

export default ItemPage
