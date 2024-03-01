import React from 'react'

function Search() {
  return (
    <form
      className="max-w-md mx-auto hidden justify-between items-center w-full lg:flex lg:w-auto"
      id="mobile-menu-2"
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block placeholder-customPink rounded-tr rounded-br text-customPink border-customPink w-4/5 p-1 ps-5 text-sm border-2 rounded-2xl "
          placeholder="Поиск по товарам"
          required
        />
        <button
          type="submit"
          className="text-white absolute end-0 bottom-0 border-2 border-customPink rounded-tl rounded-bl font-medium rounded-2xl text-sm px-3 py-1.5"
        >
          <svg
            className="w-4 h-4 text-customPink"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default Search
