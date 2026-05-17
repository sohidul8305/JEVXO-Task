import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./Pages/Home";
import Product from "./Pages/product/product";
import Success from "./Pages/Success/success";
import Solution from "./Pages/Solutions/solutions";

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
        element: <h1>About Page</h1>,
      },
      {
        path: "product",
        element: <Product></Product>
      },
      {
        path: "success",
        element: <Success></Success>
      },
      {
        path: "solutions",
        element: <Solution></Solution>
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}