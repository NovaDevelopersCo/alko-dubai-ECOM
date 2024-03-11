'use client'
import Triangle from '@/assets/triangle.svg'
import Image from 'next/image'
import Link from 'next/link'

import { FaTelegram, FaWhatsapp } from 'react-icons/fa'

export const Modal = ({
  active,
  setActive,
}: {
  active: boolean
  setActive: (a: boolean) => void
}) => {
  return (
    <div
      className={`
      ${active ? `opacity-1 scale-100` : `opacity-0 scale-75`}
      relative transition-all duration-500 select-none cursor-pointer z-50 top-0 right-0 left-0 bottom-0 ;
      `}
      onClick={() => setActive(false)}
    >
      <div
        className="p-[18px_17px] border border-customPink flex justify-center rounded-[10px] gap-1 absolute -right-[5px] top-[25px] bg-[rgba(255,75,75,0.1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          width={10.5}
          height={12.5}
          src={Triangle}
          alt="triangle"
          className="absolute right-[20px] -top-[9px]"
        />
        <Link href="#">
          <FaTelegram className="w-[32px] h-[32px] text-[#3F9FD9]" />
        </Link>
        <Link href="#">
          {/* <img
            className="w-[34px] h-[34px]"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="whatsapp"
          /> */}
          <FaWhatsapp className="w-[32px] h-[32px] text-[#49C252]" />
        </Link>
      </div>
    </div>
  )
}
