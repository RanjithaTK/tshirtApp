import React from "react"
import Header from "./Header"

function Cart() {
  return (
    <div className=" justify-center items-center">
      <Header />
      <div className=" h-2/5 flex flex-col justify-center items-center mx-20">
        <div>Shopping Cart</div>
        <div>Your Orders</div>
        <div>Nothing Added To Cart Yet</div>
      </div>
    </div>
  )
}

export default Cart
