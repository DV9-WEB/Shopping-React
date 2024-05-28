import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button className="btn hireme-btn">
              <NavLink to="/"> Get Started </NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Deepanshu Verma</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="footer-subscribe">
            <h3>Follow Me</h3>
            <form action="#">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <a
                href="https://x.com/DV9_WEB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="icons" />
              </a>
              <a
                href="https://www.github.com/DV9-WEB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icons" />
              </a>
              <a
                href="https://www.linkedin.com/in/deepanshu-verma-686aaa2b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icons" />
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 9516274854</h3>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Deepanshu Verma. All Rights Reserved
            </p>
            <div className="footer-terms">
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  zoom: 80%;
  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
    gap: 2rem;
  }

  .grid-two-column {
    grid-template-columns: 1fr 1fr;
  }

  .grid-four-column {
    width:100%;
    grid-template-columns: repeat(4, 1fr);
  }

  .contact-short {
    max-width: 60vw;
    margin: 4rem auto;
    padding: 3rem 2rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    text-align: center;

    .grid div:last-child {
      justify-self: center;
    }
  }

  footer {
    padding: 4rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    text-align: center;

    h3 {
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 1.2rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;

      .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2rem;
        cursor: pointer;
      }
    }
  }

  .footer-bottom--section {
    padding-top: 2rem;

    hr {
      margin-bottom: 1rem;
      border: none;
      border-top: 1px solid ${({ theme }) => theme.colors.hr};
    }

    .grid-two-column {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .footer-terms {
        display: flex;
        gap: 1.5rem;
      }

      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        flex-direction: column;
        gap: 1rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      padding: 2rem;
    }

    .grid-four-column {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
`;

export default Footer;
