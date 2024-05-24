import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  zoom: 70%;
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <h2>Contact</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.9495770257!2d75.69902821494966!3d22.724205003988796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1716482840321!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/myyradzj"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="Enter Your Name..."
              name="username"
              aria-autocomplete="off"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your E-mail..."
              required
            />
            <textarea
              name="Message"
              id=""
              cols={30}
              rows={10}
              placeholder="Enter Your Message here..."
              required
              autoComplete="off"
            />

            <div>
              <input type="submit" value={"send"} />
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
