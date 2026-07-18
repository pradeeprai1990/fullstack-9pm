import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/common/Layout";
import Home from "./components/pages/Home";
import ProductDetails from "./components/pages/ProductDetails";
function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/product/:slug" element={<ProductDetails/>}/>
              
           </Route>

        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
