import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./RootLayout/RootLayout";

function Home() {
  return <h1 style={{padding: "20px"}}>Welcome to the Home Page! It's working.</h1>;
}

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