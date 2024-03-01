import Image from 'next/image'
import React from 'react'

function Swaiper() {
  return (
    <div className="bg-black rounded-xl flex items-center">
      <div className="flex-1">
        <div className="flex justify-center items-center h-full">
          <h1 className="uppercase text-white text-center text-xs md:w-[130px] lg:w-[500px] md:text-md lg:text-4xl">
            Доставка алкогольных напитков в Дубае
          </h1>
          <span className="text-white text-2xl md:m-3 lg:m-6">
            <svg
              width="2"
              height="89"
              viewBox="0 0 2 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="1" x2="1" y2="89" stroke="white" strokeWidth="2" />
            </svg>
          </span>
          <span className="text-white md:text-md lg:text-7xl w-14 md:w-auto">
            24/7
          </span>
        </div>
      </div>
      <div className="flex-shrink-0">
        <Image
          className="rounded-xl w-32 md:h-72 md:w-64 object-cover object-center"
          src="/Cup.jpg"
          width={341}
          height={510}
          alt="Cup"
        />
      </div>
    </div>
  )
}

export default Swaiper
