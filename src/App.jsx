import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./Pages/Home";
import Product from "./Pages/product/product";
import Success from "./Pages/Success/success";
import Solution from "./Pages/Solutions/solutions";
import Partner from "./Pages/Partner/partner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: "about",
        element: <div className="text-white text-center py-20"><h1>About Page</h1></div>,
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "success",
        element: <Success />
      },
      {
        path: "solutions",
        element: <Solution />
      },
      {
        path: "partner",
        element: <Partner />
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}