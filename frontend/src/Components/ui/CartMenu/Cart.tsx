import clsx from 'clsx'
import React, { FC, useContext, useEffect, useRef } from 'react'
import { CartContext } from '@/Components/context/AppContext'
import Image from 'next/image'
import Link from 'next/link'

const Cart: FC = () => {
    const [isCartMenuOpen, setIsCartMenuOpen] = useContext(CartContext)
    const menuRef = useRef<HTMLDivElement | null>(null)

    const cartClasses = clsx(
        'ease-in-out duration-300 ml-6',
        'bg-[#fff] fixed top-0 right-0 h-screen w-[100%] flex',
        'w-auto lg:order-2 lg:max-w-auto z-30 p-[30px_25px]',
        isCartMenuOpen ? 'translate-x-0 customShadow' : 'translate-x-full',
    )

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node
            if (menuRef.current && !menuRef.current.contains(target)) {
                setIsCartMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuRef, setIsCartMenuOpen])
    return (
        <div className={cartClasses} id="mobile-menu-2" ref={menuRef}>
            <div className="flex flex-col justify-between">
                <div>
                    <div className="flex items-center w-[auto] justify-between gap-[36px]">
                        <h3 className="font-montserrat text-[20px] font-medium">
                            SHOPPING CART
                        </h3>
                        <div
                            className="flex items-center justify-center gap-[9px] cursor-pointer select-none"
                            onClick={() => setIsCartMenuOpen(false)}
                        >
                            <span className="font-light">CLOSE</span>
                            <span>
                                <Image
                                    src="/close.svg"
                                    width={12}
                                    height={12}
                                    alt="close"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="block mt-[9px] -ml-[25px] -mr-[25px] sm:-ml-[25px] sm:-mr-[25px] md:-ml-[0] md:-mr-[0] md:-lg-[0] md:-lg-[0]">
                        <div className="border border-customPink w-[100%]" />
                    </div>
                </div>
                <div>
                    <div className="block mt-[9px] -ml-[25px] -mr-[25px] sm:-ml-[25px] sm:-mr-[25px] md:-ml-[0] md:-mr-[0] md:-lg-[0] md:-lg-[0] mb-[17px]">
                        <div className="border border-customPink w-[100%]" />
                    </div>
                    <div className="mb-[32px] flex justify-between p-[0_14px] text-[20px]">
                        <span className="font-montserrat font-semibold">
                            ПОДЫТОГ
                        </span>
                        <span className="text-customPink font-montserrat font-semibold">
                            250 AED
                        </span>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <Link
                            className="p-[13px_46px] rounded-[15px] text-montserrat text-[#878787] bg-[#fff] border border-customPink flex justify-center transition-all hover:scale-105"
                            href="/cart"
                        >
                            ПРОСМОТР КОРЗИНЫ
                        </Link>
                        <Link
                            className="p-[13px_46px] rounded-[15px] text-montserrat text-[#fff] border border-customPink bg-customPink flex justify-center transition-all hover:scale-105"
                            href="#"
                        >
                            ОФОРМИТЬ ЗАКАЗ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
