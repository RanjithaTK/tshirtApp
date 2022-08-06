import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Page from "./components/Page"
import Cart from "./components/Cart"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <Page />
    // </div>
  )
}

export default App
