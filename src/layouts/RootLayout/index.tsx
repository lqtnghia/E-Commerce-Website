import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RootLayout = () => {
  return (
    <Suspense>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  );
};

export default RootLayout;
