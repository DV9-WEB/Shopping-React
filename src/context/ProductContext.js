import axios from "axios";
import { createContext, useEffect } from "react";

const AppContext = createContext();

const API = "https://www.api.pujakaitem.com/api/products";

const getProducts = async (url) => {
  try {
      const res = await axios.get(url);
      const products = await res.data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const AppProvider = ({ children }) => {
  useEffect(() => {
    getProducts(API);
  }, []); 

  return (
    <AppContext.Provider value={"Deepnanshu"}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
