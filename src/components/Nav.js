import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { CgClose, CgMenu } from "react-icons/cg";

const Navbar = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .cart-trolley-link {
    position: relative;

    .cart-trolley {
      position: relative;
      height: 2.8rem;
      width: 2.8rem;
    }
    .cart-total-item {
      width: 2rem;
      height: 2rem;
      position: absolute;
      background-color: ${({ theme }) => theme.colors.helper};
      color: #fff;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -15%;
      right: -30%;
      font-size: 1.2rem;
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  @media (max-width: 768px) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      position: fixed;
      top: 1rem;
      right: 1rem;

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .navbar-lists {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #fff;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.3s linear, visibility 0.3s linear,
        opacity 0.3s linear;
      visibility: hidden;
      opacity: 0;
      z-index: 1000; /* Ensure it stays on top */
    }

    .navbar.active .navbar-lists {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    }

    .navbar-link:{
      font-size: 2.4rem; /* Larger font size for mobile */
    }

    .cart-trolley-link {
      .cart-trolley {
        hight: 4rem; /* Larger icon size for mobile */
        width: 4rem; /* Larger icon size for mobile */
      }

      .cart-total-item {
        width: 2.4rem;
        height: 2.4rem;
        font-size: 1.8rem;
      }
    }

    
    .darkmode-icon,
    .cart-icon {
      font-size: 4rem; /* Larger icon size for mobile */
    }
  }
`;

const DarkModeIcon = styled(MdDarkMode)`
  height: 2.5rem;
  width: 2.5rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 4rem;
    width: 4rem;
  }
`;

const OutlineDarkModeIcon = styled(MdOutlineDarkMode)`
  height: 2.5rem;
  width: 2.5rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 4rem;
    width: 4rem;
  }
`;

const ShoppingCartIcon = styled(FiShoppingCart)`
  height: 3.2rem;
  width: 3.2rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 4rem;
    width: 4rem;
  }
`;

const Nav = () => {
  const [mode, setMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const modeClick = () => {
    setMode(!mode);
  };

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Navbar>
      <div className={`navbar ${menuOpen ? "active" : ""}`}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link" onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={handleLinkClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="navbar-link"
              onClick={handleLinkClick}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </li>
          <li onClick={modeClick}>
            {mode ? (
              <DarkModeIcon className="darkmode-icon" />
            ) : (
              <OutlineDarkModeIcon className="darkmode-icon" />
            )}
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley-link">
              <ShoppingCartIcon className="cart-icon cart-trolley" />
              <span className="cart-total-item">9</span>
            </NavLink>
          </li>
        </ul>
        <button className="mobile-navbar-btn" onClick={menuClick}>
          {menuOpen ? (
            <CgClose className="mobile-nav-icon close-outline" />
          ) : (
            <CgMenu className="mobile-nav-icon" />
          )}
        </button>
      </div>
    </Navbar>
  );
};

export default Nav;
