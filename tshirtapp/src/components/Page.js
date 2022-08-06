import React from "react"
import Body from "./Body"
import Cart from "./Cart"
import Grid from "./Grid"
import Header from "./Header"

function Page() {
  return (
    <div className="h-screen w-full">
      <Header />
      {/* <Sidebar /> */}
      {/* <Body /> */}
      <Grid />
      {/* <Cart/> */}
    </div>
  )
}

export default Page
