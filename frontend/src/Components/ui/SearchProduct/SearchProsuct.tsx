export const SearchProduct = () => {
    return (
        <form
            className="max-w-md mx-auto hidden justify-between items-center w-full sm:flex sm:w-auto"
            id="mobile-menu-2"
        >
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium  sr-only text-white"
            >
                Search
            </label>
            <div className="relative flex items-center">
                <input
                    type="search"
                    id="default-search"
                    className="block placeholder-customPink text-customPink border-customPink h-[36px] w-[294px] p-1 ps-5 text-sm border-2 rounded-2xl outline-none"
                    required
                />
                <button
                    type="submit"
                    className="absolute -end-[40px] top-[auto] font-medium px-3 py-1.5"
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    )
}
