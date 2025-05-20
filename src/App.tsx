import { createContext, useState } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./Pages/HomePage";
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";

import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ProductZoom from "./components/ProductZoom";
import { IoClose } from "react-icons/io5";
import ProductDetailsContent from "./components/ProductDetailsContent";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";

interface MyContextType {
  setOpenProductDetailsModal: (value: boolean) => void;
  setOpenCartPanel: (value: boolean) => void;
  openCartPanel: boolean;
  toggleCartPanel: (newOpen: boolean) => void;
}

export const MyContext = createContext<MyContextType | null>(null);

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
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      }
    ]
  }
]);

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps["maxWidth"]>("lg");
  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };

  const toggleCartPanel = (newOpen: boolean) => () => {
    setOpenCartPanel(newOpen);
  };

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel
  };
  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="productDetailsModalContainer flex items-center w-full relative">
              <Button
                className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]"
                onClick={() => {
                  handleCloseProductDetailsModal();
                }}
              >
                <IoClose className="text-[20px]" />
              </Button>
              <div className="col1 w-[40%] p-3">
                <ProductZoom />
              </div>
              <div className="col2 w-[60%] p-8 productContent">
                <ProductDetailsContent />
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </MyContext.Provider>
  );
}

export default App;
