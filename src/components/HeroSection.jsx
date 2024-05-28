import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {myData.name} </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  zoom: 70%;
  padding: 12rem 0;

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 9rem;
  }

  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      font-size: 2rem;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 5.5rem;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: ${({theme})=> theme.colors.helper};
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .grid-two-column {
      grid-template-columns: 1fr;
    }

    .hero-section-data,
    .hero-section-image {
      order: 0;
      width: 100%;
    }

    .hero-section-image {
      order: 1;
    }

    .hero-section-data p {
      font-size: 3rem; /* Increased by 1rem */
    }

    .hero-section-data h1 {
      font-size: 8rem; /* Increased by 1rem */
    }

    .hero-section-data .intro-data {
      font-size: 3rem; /* Increased by 1rem */
    }

    /* Increase button font size by 1rem */
    .hero-section-data .intro-data + h1 + p + a Button {
      font-size: 2rem; /* Adjust this if Button component supports font-size */
    }
  }
`;

export default HeroSection;
