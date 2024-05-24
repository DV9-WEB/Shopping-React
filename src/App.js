import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppLayout from "./AppLayout";

const App = () => {
  const theme = {
    colors: {
      bg: "#F7F7F7",
      footer_bg: "#0a1435",
      btn: "rgb(98, 84, 243)",
      heading: "rgba(24,23,29)",
      text: "rgba(29,29,29, .8)",
      helper: "#0F52BA",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "fffff",
      shadow:
        "rgba(0, 0, 0, 0.2) 0px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      btn: "#ff0000",
      white: "#fff",
      black: "#212529",
      gradient:
        "linear-gradient(0deg, rgb(132,144,255)0%, rgb(98, 189, 255)100%)",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route element={<AppLayout />} >
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="singleproduct/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
        </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
