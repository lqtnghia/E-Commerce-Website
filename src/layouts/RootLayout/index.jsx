import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default RootLayout;
