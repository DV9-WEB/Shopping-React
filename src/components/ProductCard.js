import React from "react";
import styled from "styled-components";

const ProductCard = ({ product, onAddToCart }) => {
  const getFirstThreeWords = (str) => {
    return str.split(" ").slice(0, 3).join(" ");
  };

  return (
    <Card>
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h3>{getFirstThreeWords(product.title)}</h3>
        <h3 className="price">
          <b>
            Price: <span>{product.price}₹</span>
          </b>
        </h3>
      </div>
      <button className="add-to-cart" onClick={onAddToCart}>
        Add to Cart
      </button>
    </Card>
  );
};

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.helper};
  text-align: center;
  transition: transform 0.3s ease;
  height: 30rem; /* Increased height to accommodate the button */
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 60%; /* Adjusted height to make space for the button */
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

  .add-to-cart {
    padding: 0.5rem 1rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.helper};
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    margin: 0.5rem;
    opacity: 1;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default ProductCard;
