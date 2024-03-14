import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RoutLayouts from "./layout/RoutLayouts"
import Home from "./layout/Page/Home"
import Special from "./layout/Page/Special";
import Product_details from "./layout/Page/Product_details";
import AddToCartPage from "./layout/Page/AddToCartPage";


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RoutLayouts />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/special" element={<Special/>}/>
          <Route path="/singleProduct/:id" element={<Product_details/>}/>
          <Route path="/addtocart" element={<AddToCartPage/>}/>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
