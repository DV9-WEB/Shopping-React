import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { CgClose, CgMenu } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  .navbar-lists {
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.5rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active-link {
      font-weight: bold;
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
      top: -20%;
      right: -35%;
      font-size: 1.2rem;
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1001;

    .mobile-nav-icon {
      font-size: 4.2rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  @media (max-width: 768px) {
    .mobile-navbar-btn {
      display: inline-block;
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
      z-index: 1000;
    }

    .navbar.active .navbar-lists {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    }

    .navbar-link {
      font-size: 2.4rem;
    }

    .navbar-link.active-link {
      font-weight: bold;
    }

    .cart-trolley-link {
      .cart-trolley {
        height: 4rem;
        width: 4rem;
      }

      .cart-total-item {
        width: 2.4rem;
        height: 2.4rem;
        font-size: 1.8rem;
      }
    }

    .darkmode-icon,
    .cart-icon {
      font-size: 4rem;
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

const AccountButton = styled.div`
  background-color: #0f52ba;
  color: white;
  height: 2.5rem;
  font-size: 1.6rem;
  width: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 2.5rem;
    font-size: 1.6rem;
    width: 6rem;
  }
`;

const Nav = ({ isLogIn, handleLogOut }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Navbar>
      <h2 style={{ fontSize: "2rem", margin: "2rem", marginTop: "2.5rem" }}>
        <NavLink to="/product">
          <FaSearch />
        </NavLink>
      </h2>
      <div className={`navbar ${menuOpen ? "active" : ""}`}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar-link active-link" : "navbar-link"
              }
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "navbar-link active-link" : "navbar-link"
              }
              onClick={handleLinkClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "navbar-link active-link" : "navbar-link"
              }
              onClick={handleLinkClick}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "navbar-link active-link" : "navbar-link"
              }
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </li>
          {isLogIn && (
            <li>
              <NavLink to="/cart" className="navbar-link cart-trolley-link">
                <ShoppingCartIcon className="cart-icon cart-trolley" />
                <span className="cart-total-item">9</span>
              </NavLink>
            </li>
          )}
          <li>
            {isLogIn ? (
              <NavLink to="/" onClick={handleLogOut}>
                <AccountButton>Logout</AccountButton>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <AccountButton>Login</AccountButton>
              </NavLink>
            )}
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
