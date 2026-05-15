import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout/RootLayout";
import Home from "./Pages/Home";

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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}