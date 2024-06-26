import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = ({ isLogIn, handleLogOut }) => {
  return (
    <MainHeader>
      <NavLink to="/">
        <div className="logo" style={{ border: "2px solid black" }}>
          <span style={{ backgroundColor: "#0F52BA", color: "white" }}>
            Verma
          </span>
          &nbsp;
          <span>Store</span>
        </div>
      </NavLink>
      <Nav isLogIn={isLogIn} handleLogOut={handleLogOut} />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    font-size: 2rem;
    padding: 0;
  }
`;

export default Header;
