"use client"
import React, { useState } from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setPopularity } from '@/lib/features/filter/filter';

const list = [
  { name: 'хит продаж', popularity: true },
  { name: 'новинки', news: true },
  { name: 'скидки', sale: true },
];

function MainPageSort() {
  const underlineClasses = clsx(
    'absolute',
    'h-0.5',
    'bg-customPink',
    'bottom-0',
    'left-0',
    'w-0',
    'group-hover:w-full',
    'transition-all',
    'duration-300'
  );
  const sortRef = React.useRef();
  const dispatch = useAppDispatch();
  const popularity = useAppSelector((state) => state.filters.popularity);
  const [selectedItem, setSelectedItem] = useState(null);

  React.useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
      }
    };
  
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const onClickListItem = (item:any) => {
    dispatch(setPopularity(item));
    setSelectedItem(item);
  };
  console.log(popularity);

  return (
    <div ref={sortRef} className="text-center">
      <h1 className="uppercase text-xl md:text-2xl p-8">Популярные Товары</h1>
      <div className="pointer flex justify-center">
        <ul className="flex px-10 font-medium lg:flex-row lg:space-x-8 mt-0">
          {list.map((item, index) => (
            <li key={index} className="relative group">
              <span
                className={clsx(
                  'px-3',
                  'text-sm',
                  'lg:text-lg',
                  'lg:text-black',
                  'border-b',
                  'border-gray-100',
                  'lg:hover:bg-transparent',
                  'lg:border-0',
                  'lg:hover:text-primary-700',
                  { 'text-primary-700': selectedItem === item }
                )}
                aria-current="page"
                onClick={() => onClickListItem(item)}
              >
                {item.name}
              </span>
              <span className={clsx(underlineClasses, { 'w-full': selectedItem === item })}></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainPageSort;
