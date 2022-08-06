import { BrowserRouter } from "react-router-dom"
import "./App.css"
// import {BrowserRouter, Routes } from "react-router-dom"
import Page from "./components/Page"

function App() {
  return (
    // <BrowserRouter>
      // <Routes>
      //   <Route path="/" element={<Page />}></Route>
      // </Routes>
    // </BrowserRouter>
    <div className="App">
      <Page />
    </div>
  )
}

export default App
