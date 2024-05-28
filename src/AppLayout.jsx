import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppLayout = ({ isLogIn, handleLogOut }) => {
  return (
    <>
      <Header isLogIn={isLogIn} handleLogOut={handleLogOut} />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
