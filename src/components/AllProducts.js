import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

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

  // Function to extract the first three words from a string
  const getFirstThreeWords = (str) => {
    return str.split(" ").slice(0, 3).join(" ");
  };

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  // Function to sort products based on price
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
          <Card key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="info">
              <h3>{getFirstThreeWords(product.title)}</h3>
              <h3 className="price">
                <b>
                  Price: <span>{product.price}₹</span>
                </b>
              </h3>
            </div>
          </Card>
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

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.helper};
  text-align: center;
  transition: transform 0.3s ease;
  height: 27rem;
  width: 25rem;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 80%;
    border-radius: 8px 8px 0 0;
  }

  .info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  .price {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
  }

  .price span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NoResultMessage = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export default AllProducts;
