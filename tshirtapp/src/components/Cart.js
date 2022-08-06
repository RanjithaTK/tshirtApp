import React from "react"
import Header from "./Header"

function Cart() {
  return (
    <div className=" justify-center items-center">
      <Header />
      <div className="border-4 h-2/5 flex flex-col justify-center items-center mx-20">
        <div>Shopping Cart</div>
        <div>Your Orders</div>
        <div>Your Orders</div>
      </div>
    </div>
  )
}

export default Cart
