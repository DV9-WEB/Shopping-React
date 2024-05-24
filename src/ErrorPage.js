import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Link target="_blank">
      <Wrapper>
        <div className="container">
          <h2>404</h2>
          <h2>UH OH! You're lost.</h2>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>
          <Button>Go to Home</Button>
        </div>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.section`
  zoom: 70%;
  .container {
    padding: 9rem 0;
    text-align: center;

    h1 {
      font-size: 10rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;
