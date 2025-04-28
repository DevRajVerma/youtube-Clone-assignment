

function Searchbar() {
  return (
    <div className="flex justify-center items-center py-4 border-gray-500">
        <form className="w-96 max-w-md">
            <div className="relative">
                <input
                    type="search"
                    id="search"
                    className="w-full p-3 pl-4 text-sm border rounded-3xl"
                    placeholder="Search..."
                    required
                />
                <button
                    type="submit"
                    className=" text-gray-400 bg-slate-950 absolute right-2 top-1/2  -translate-y-1/2  px-4 py-2 rounded-lg  "
                >
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                        />
                    </svg>
                </button>
                
            </div>
        </form>
    </div>
  )
}

export default Searchbar
