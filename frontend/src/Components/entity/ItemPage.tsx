'use client'
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useSearchParams } from 'next/navigation';
import {fetchItemById, fetchItemsSuccess} from '@/lib/features/items/items';
import Image from "next/image";
import Container from "@/Components/ui/Container/Container";
import {RootState} from "@/lib/store";


const ItemPage = async () => {
    const dispatch = useAppDispatch();
    const searchParams = useSearchParams();
    const itemId = searchParams.get('id');
    const item = useAppSelector(
        (state: RootState) => state.item,
    )
console.log(item)

    // const storedQuantity = localStorage.getItem('quantity');
    // const initialQuantity = storedQuantity ? parseInt(storedQuantity, 10) : 1;
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchItemById(Number(itemId)));
    }, [dispatch, itemId]);

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
                            <Image
                                src="/whisky.png"
                                alt="png"
                                className="w-full ml-0"
                                width={384}
                                height={510}
                            />
                        </div>
                        <div className="mt-28 ml-auto">
                            <span className="opacity-70 text-3xl ">Пиво в бутылках Corona 0.33 (24 шт)</span>
                            <div className="font-bold text-customPink mt-6">
                                <span className="text-3xl font-bold line-through text-customGray mr-1">
                                    <span>120 AED </span>
                                </span>
                                <span className="text-3xl"> 1213 AED</span>
                            </div>
                            <div className="flex mt-7 mb-16">
                                <div className="flex items-center mr-4">
                                    <button
                                            className="w-5 text-2xl border-2 border-customPink rounded-l-lg">-
                                    </button>
                                    <span
                                        className="text-lg border-t-2 border-b-2 border-customPink w-7 py-0.5 px-1.5">{quantity}</span>
                                    <button
                                            className=" w-5 text-2xl border-2 border-customPink rounded-r-lg ">+
                                    </button>
                                </div>
                                <button
                                    className="text-base font-semibold bg-customPink text-white py-3 px-14 rounded-3xl">
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </figure>
            </article>
        </Container>
    );
};

export default ItemPage;
