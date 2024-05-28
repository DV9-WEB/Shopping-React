import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../Context/Context";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const { setAddToCart } = useContext(DataContext);

  useEffect(() => {
    const getAPI = async (url) => {
      try {
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAPI("https://fakestoreapi.com/products");
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const sortProducts = () => {
    if (sortOrder === "highToLow") {
      return filteredProducts.slice().sort((a, b) => b.price - a.price);
    } else if (sortOrder === "lowToHigh") {
      return filteredProducts.slice().sort((a, b) => a.price - b.price);
    }
    return filteredProducts;
  };

  const sortedProducts = sortProducts();

  return (
    <Wrapper>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by Price</option>
          <option value="highToLow">High to Low</option>
          <option value="lowToHigh">Low to High</option>
        </select>
      </div>
      {sortedProducts.length === 0 && (
        <NoResultMessage>Nothing is found</NoResultMessage>
      )}
      <div className="main">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() =>
              setAddToCart((prevProduct) => [
                ...prevProduct,
                { ...product, quantity: 1 },
              ])
            }
          />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-direction: column;

  .search-bar {
    height: 5rem;
    display: flex;
    gap: 8rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;

    input {
      height: 4rem;
    }
  }

  .main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 1rem;

    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const NoResultMessage = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default AllProducts;
