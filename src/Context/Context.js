// src/DataContext.js
import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [addToCart, setAddToCart] = useState("");

  return (
    <DataContext.Provider value={{ addToCart, setAddToCart }}>
      {children}
    </DataContext.Provider>
  );
};
