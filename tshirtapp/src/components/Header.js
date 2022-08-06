import React from "react"
// import { useNavigate } from "react-router-dom"

function Header() {
  // const navigate = useNavigate()
  return (
    <div>
      <div className="text-xl font-bold   px-10 py-4 bg-slate-300  h-1/3  flex justify-between">
        <div className="  ">TeeRex Store</div>
        <div className="">Products </div>
        <div className="">Cart </div>
        {/* <div className="" onClick={() => navigate("/cart")}> */}
        </div>
      </div>
    // </div>
  )
}

export default Header
