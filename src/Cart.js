import { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "./Context/Context";
import CongratsModal from "./components/CongratsModal";

const Cart = () => {
  const { addToCart, setAddToCart } = useContext(DataContext);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [showCongrats, setShowCongrats] = useState(false);

  const increaseQuantity = (productId) => {
    setAddToCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setAddToCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (productId) => {
    setAddToCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  const calculatePriceWithDelivery = (price, quantity) => {
    const deliveryCharge = price * 0.2;
    // const deliveryCharge = dlvryCharge.toFixed(2)
    return price * quantity + deliveryCharge;
  };

  const getTotalCartPrice = () => {
    return addToCart
      .reduce((total, product) => {
        return (
          total + calculatePriceWithDelivery(product.price, product.quantity)
        );
      }, 0)
      .toFixed(2);
  };

  const handleOrderClick = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const handleConfirmOrder = () => {
    setShowModal(false);
    setShowCongrats(true);
  };

  const handleOrderPlace = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  return (
    <Wrapper>
      {addToCart.length === 0 ? (
        <EmptyCart>
          <h2>Cart is empty</h2>
        </EmptyCart>
      ) : (
        <div className="cart-items">
          {addToCart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.image} alt={product.title} />
              <div className="info">
                <h3>{product.title}</h3>
                <p>Price: {product.price}₹</p>
                <div className="quantity-control">
                  <button
                    style={{ color: "black" }}
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    style={{ color: "black" }}
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <p>
                  Price with Delivery:{" "}
                  {calculatePriceWithDelivery(product.price, product.quantity)}₹
                </p>
                <div className="button-container">
                  <button
                    className="order-button"
                    onClick={() => handleOrderClick(product)}
                  >
                    Order Place
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => removeItem(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="total">
            <h3>Total Cart Price: {getTotalCartPrice()}₹</h3>
            <button className="order-button" onClick={()=>handleOrderPlace(addToCart[0])}>
              Order Place
            </button>
          </div>
        </div>
      )}
      {showModal && (
        <Modal>
          <div className="modal-content">
            <p>Do you want to place the order for {currentItem.title}?</p>
            <button onClick={handleConfirmOrder}>Confirm</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </Modal>
      )}
      {showCongrats && <CongratsModal onClose={() => setShowCongrats(false)} />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 800px;

    .cart-item {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.helper};
      border-radius: 8px;
      background-color: #fff;

      img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        border-radius: 8px;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        h3 {
          font-size: 1.5rem;
          margin: 0;
        }

        p {
          font-size: 1.2rem;
          margin: 0.2rem 0;
        }

        .quantity-control {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          button {
            padding: 0.5rem 1rem;
            background-color: ${({ theme }) => theme.colors.primary};
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          span {
            font-size: 1.2rem;
          }
        }

        .button-container {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .order-button {
          padding: 0.5rem 1rem;
          background-color: ${({ theme }) => theme.colors.helper};
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .remove-button {
          padding: 0.5rem 1rem;
          background-color: red;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }

    .total {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.helper};
      border-radius: 8px;
      background-color: #fff;

      .order-button {
        padding: 0.5rem 1rem;
        background-color: ${({ theme }) => theme.colors.helper};
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      h3 {
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }
`;

const EmptyCart = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  border-radius: 8px;

  h2 {
    font-size: 2rem;
    margin: 0;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    width: 80%;
    max-width: 500px;

    p {
      margin: 0 0 2rem 0;
      font-size: 1.2rem;
    }

    button {
      padding: 0.5rem 1rem;
      margin: 0 1rem;
      background-color: ${({ theme }) => theme.colors.helper};
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`;

export default Cart;
