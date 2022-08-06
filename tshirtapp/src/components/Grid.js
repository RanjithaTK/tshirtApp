import React, { useEffect, useState } from "react"
const api =
  " https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json "

function Grid() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const addToCart = () => {}
  return (
    // <div>
    //   {product.map((pro) => (
    //     <div>{pro.color}</div>
    //   ))}
    // </div>
    <div className="flex  h-screen ">
      <div className=" float-left w-1/4  ">
        {/* <div className="text-xl">colour</div>
        <div>White</div>
        <div>Red</div>
        <div className="text-xl">Type</div>
        <div>Polo</div>
        <div>Basic</div> */}

        <h4 class=" m-4  px-5 font-semibold text-gray-900 dark:text-black ">
          Colour
        </h4>
        <ul class="mx-4 text-sm font-medium text-black bg-white rounded-lg border border-gray-200 dark:bg-gray-200 dark:border-gray-600 ">
          <li class=" rounded-t-lg border-b border-gray-200 dark:border-gray-400">
            <div class="flex items-center pl-3 ">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 w-full text-sm font-medium text-gray-900 dark:text-black"
              >
                Red
              </label>
            </div>
          </li>
        </ul>
        <ul class="mx-4 text-sm font-medium text-black bg-white rounded-lg border border-gray-200 dark:bg-gray-200 dark:border-gray-600 ">
          <li class=" rounded-t-lg border-b border-gray-200 dark:border-gray-400">
            <div class="flex items-center pl-3 ">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 w-full text-sm font-medium text-gray-900 dark:text-black"
              >
                Black
              </label>
            </div>
          </li>
        </ul>
        <ul class="mx-4 text-sm font-medium text-black bg-white rounded-lg border border-gray-200 dark:bg-gray-200 dark:border-gray-600 ">
          <li class=" rounded-t-lg border-b border-gray-200 dark:border-gray-400">
            <div class="flex items-center pl-3 ">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 w-full text-sm font-medium text-gray-900 dark:text-black"
              >
                Blue
              </label>
            </div>
          </li>
        </ul>
        <h4 class=" mb-4 font-semibold text-gray-900 dark:text-black ">Type</h4>
        <ul class="mx-4 text-sm font-medium text-black bg-white rounded-lg border border-gray-200 dark:bg-gray-200 dark:border-gray-600 ">
          <li class=" rounded-t-lg border-b border-gray-200 dark:border-gray-400">
            <div class="flex items-center pl-3 ">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 w-full text-sm font-medium text-gray-900 dark:text-black"
              >
                Polo
              </label>
            </div>
          </li>
        </ul>
        <ul class="mx-4 text-sm font-medium text-black bg-white rounded-lg border border-gray-200 dark:bg-gray-200 dark:border-gray-600 ">
          <li class=" rounded-t-lg border-b border-gray-200 dark:border-gray-400">
            <div class="flex items-center pl-3 ">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 w-full text-sm font-medium text-gray-900 dark:text-black"
              >
                Huddie
              </label>
            </div>
          </li>
        </ul>
        <ul class="mx-4 text-sm font-medium text-black bg-white rounded-lg border border-gray-200 dark:bg-gray-200 dark:border-gray-600 ">
          <li class=" rounded-t-lg border-b border-gray-200 dark:border-gray-400">
            <div class="flex items-center pl-3 ">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="py-3 w-full text-sm font-medium text-gray-900 dark:text-black"
              >
                Basic
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="scroll-smooth overflow-y-scroll w-full">
        <label className=" block  my-4 w-full px-2">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for Products..."
            type="text"
            name="search"
          />
        </label>
        <body className="w-full  py-16 float-right  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10  ">
          {/* <!-- grid container --> */}

          {product.map((pro) => (
            <div className=" px-2">
              {/* <!-- product card --> */}
              <a
                href={pro.imageURL}
                className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:ring-opacity-20 rounded-md"
              >
                <img
                  src={pro.imageURL}
                  alt="Product"
                  className="h-36 object-cover rounded-tl-md rounded-tr-md "
                />

                <div className="px-3 py-2 ">
                  <h1 className="font-semibold">{pro.name}</h1>
                  <p className="text-sm">₹{pro.price}</p>
                  <p className="text-sm bg-red-500 font-bold">
                    Hurry..Only {pro.quantity} left!
                  </p>
                  <div className="flex justify-center">
                    <button
                      className="border-4 bg-gray-400 rounded-md hover:drop-shadow-lg hover:ring-opacity-60  "
                      onClick={addToCart}
                    >
                      Add To Cart
                    </button>
                    <div className=" text-gray-300 hover:text-red-500 duration-300">
                      &hearts;
                    </div>
                  </div>
                </div>
              </a>
              {/* product2 */}
              {/* <a
              href="https://www.kindacode.com"
              className="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md"
            >
              <img
                src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"
                alt="Fiction Product"
                className="h-36 object-cover rounded-tl-md rounded-tr-md"
              />

              <div className="px-3 py-2">
                <h1 className="font-semibold">Product One</h1>
                <p className="text-sm">$69.69</p>
              </div>
            </a> */}
            </div>
          ))}
        </body>
      </div>
    </div>
  )
}

export default Grid
