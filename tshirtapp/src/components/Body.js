import React from "react"

function Body() {
  return (
    <div className="justify-between mx-10 my-10 pb-20">
      <div className="border-4 float-left w-1/4  h-screen">
        <div className="text-xl">colour</div>
        <div>White</div>
        <div>Red</div>
        <div className="text-xl">Type</div>
        <div>Polo</div>
        <div>Basic</div>
      </div>
      <div>
        <div className="px-40 py-20 bg-amber-100 float-right">
          <div className="w-72 bg-white drop-shadow-md rounded-lg">
            <img
              className="object-cover rounded-tl-lg rounded-tr-lg"
              src="https://www.kindacode.com/wp-content/uploads/2022/06/computer-example.jpg"
              alt="img"
            />
            <div className="px-5 py-3 space-y-2">
              <h3 className="text-lg">Super Computer 9064GB RAM</h3>
              <div className="space-x-2">
                <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                  Free Ship
                </span>
                <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                  7 Day Return
                </span>
              </div>
              <p className="space-x-2">
                <span className="text-2xl font-semibold">$600</span>
                <span className="text-sm line-through text-gray-500">
                  $1000
                </span>
                <span className="text-sm text-red-700">40% off</span>
              </p>
              <div className="flex justify-between items-center pt-3 pb-2">
                <a
                  href="#"
                  className="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300"
                >
                  Add to Cart
                </a>

                <a
                  href="#"
                  title="Add to Favorites"
                  className="text-2xl text-gray-300 hover:text-red-500 duration-300"
                >
                  &hearts;
                </a>
              </div>
            </div>
          </div>
          <div className="w-72 bg-white drop-shadow-md rounded-lg">
            <img
              className="object-cover rounded-tl-lg rounded-tr-lg"
              src="https://www.kindacode.com/wp-content/uploads/2022/06/computer-example.jpg"
              alt="img"
            />
            <div className="px-5 py-3 space-y-2">
              <h3 className="text-lg">Super Computer 9064GB RAM</h3>
              <div className="space-x-2">
                <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                  Free Ship
                </span>
                <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                  7 Day Return
                </span>
              </div>
              <p className="space-x-2">
                <span className="text-2xl font-semibold">$600</span>
                <span className="text-sm line-through text-gray-500">
                  $1000
                </span>
                <span className="text-sm text-red-700">40% off</span>
              </p>
              <div className="flex justify-between items-center pt-3 pb-2">
                <a
                  href="#"
                  className="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300"
                >
                  Add to Cart
                </a>

                <a
                  href="#"
                  title="Add to Favorites"
                  className="text-2xl text-gray-300 hover:text-red-500 duration-300"
                >
                  &hearts;
                </a>
              </div>
            </div>
          </div>
          <div className="w-72 bg-white drop-shadow-md rounded-lg">
            <img
              className="object-cover rounded-tl-lg rounded-tr-lg"
              src="https://www.kindacode.com/wp-content/uploads/2022/06/computer-example.jpg"
              alt="img"
            />
            <div className="px-5 py-3 space-y-2">
              <h3 className="text-lg">Super Computer 9064GB RAM</h3>
              <div className="space-x-2">
                <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                  Free Ship
                </span>
                <span className="px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500">
                  7 Day Return
                </span>
              </div>
              <p className="space-x-2">
                <span className="text-2xl font-semibold">$600</span>
                <span className="text-sm line-through text-gray-500">
                  $1000
                </span>
                <span className="text-sm text-red-700">40% off</span>
              </p>
              <div className="flex justify-between items-center pt-3 pb-2">
                <a
                  href="#"
                  className="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300"
                >
                  Add to Cart
                </a>

                <a
                  href="#"
                  title="Add to Favorites"
                  className="text-2xl text-gray-300 hover:text-red-500 duration-300"
                >
                  &hearts;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
