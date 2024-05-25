import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Account = ({ handleLogIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogIn();
    navigate("/");
  };

  return (
    <Wrapper>
      <div className="main">
        <NavLink to="/" className="close">
          <h2>X</h2>
        </NavLink>
        <div className="heading">
          <h2>Sign In</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .main {
    position: relative;
    height: 70vh;
    width: 80vw;
    background-color: #f3f3f3;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    color: #333;
    text-decoration: none;
  }

  .heading {
    margin-bottom: 2rem;
  }

  h2 {
    margin: 0;
    font-size: 2rem;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;

    input {
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 50%;
      margin: auto; /* Centering input */
    }

    button {
      padding: 0.5rem;
      font-size: 1rem;
      border: none;
      border-radius: 5px;
      background-color: #0f52ba;
      color: white;
      cursor: pointer;
      width: 50%; /* Setting button width */
      margin: auto; /* Centering button */
    }

    button:hover {
      background-color: #0d47a1;
    }
  }
`;

export default Account;
