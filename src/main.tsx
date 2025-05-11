import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/index.jsx";
import HomePage from "./Pages/HomePage/index.jsx";
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/productListing",
        element: <ProductListing />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      }
    ]
  }
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
