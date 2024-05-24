import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {

  const data = {
    name:"Verma Store"
  }

  return (
    <>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
