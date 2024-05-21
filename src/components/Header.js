import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav"

const Header = () => {
  
  return (
    <MainHeader>
      <NavLink to="/">
        <h1 className="logo">DV9-WEB</h1>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    font-size: 3rem;
  }
`;

export default Header;
