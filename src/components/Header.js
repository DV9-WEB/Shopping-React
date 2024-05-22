import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav"

const Header = () => {
  
  return (
    <MainHeader>
      <NavLink to="/">
        <div className="logo" style={{border: "2px solid black"}}>
          <span style={{backgroundColor:"#0F52BA",color:"black"}}>Verma</span>&nbsp;
          <span>Store</span>
        </div>
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
    font-size: 2rem;
  }
`;

export default Header;
