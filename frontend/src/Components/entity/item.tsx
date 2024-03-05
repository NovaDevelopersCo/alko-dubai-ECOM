'use client'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { fetchItems } from '@/lib/features/items/items'

export function Item() {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.item.posts.items)

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items &&
        Array.isArray(items) &&
        items.map((product) => (
          <li key={product.id} className="border p-4 rounded-md shadow-md">
            <article>
              <figure>
                {product.image && (
                  <img
                    src={product.image}
                    alt="png"
                    className="w-full h-auto rounded-md"
                  />
                )}
              </figure>
              <div className="mt-4">
                <h1 className="text-lg font-semibold mb-2">{product.title}</h1>
                <p className="text-sm mb-2">{product.description}</p>
                <p className="text-xl font-bold text-blue-500">
                  ${product.price}
                </p>
                {/* Add a button if necessary */}
              </div>
            </article>
          </li>
        ))}
    </ul>
  )
}
