import React from "react";
import styled from "styled-components";

const CongratsModal = ({ onClose }) => {
  return (
    <Backdrop>
      <Modal>
        <h2>Congratulations 🥳🎉</h2>
        <p>Your order has been placed successfully.</p>
        <button onClick={onClose}>Close</button>
      </Modal>
    </Backdrop>
  );
};

const Backdrop = styled.div`
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
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.colors.helper};
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  width: 80%;
  max-width: 500px;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0 0 2rem 0;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default CongratsModal;
