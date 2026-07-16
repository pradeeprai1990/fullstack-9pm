import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/pages/login";
import Layout from "./components/common/Layout";
import Dashboard from "./components/pages/Dashboard";
import AddColor from "./components/pages/color/AddColor";
import ViewColor from "./components/pages/color/ViewColor";
import AddMaterial from "./components/pages/material/AddMaterial";
import ViewMaterial from "./components/pages/material/ViewMaterial";


function App() {

  return (
   <>
     <BrowserRouter>

        <Routes>
            <Route element={<Layout/>}>
                <Route path="/dashboard" element={<Dashboard/>} />
                {/* http://localhost:5173/color */}
                <Route path="color">
                  {/* //http://localhost:5173/color/add */}
                    <Route path="add" element={<AddColor/>}/>
                     <Route path="view" element={<ViewColor/>}/>
                </Route>

                 <Route path="material">
                  {/* //http://localhost:5173/color/add */}
                    <Route path="add" element={<AddMaterial/>}/>
                     <Route path="view" element={<ViewMaterial/>}/>
                </Route>
            </Route>
           
          

            <Route path="/" element={<Login/>}/>

        </Routes>
     
     </BrowserRouter>
   
   </>
  )
}

export default App
