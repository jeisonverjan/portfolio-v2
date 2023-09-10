import React, { useRef } from "react";
import { styled } from "styled-components";
import { TbMailForward } from "react-icons/tb";
import { sentEmail } from "../utils/helpers";

const StyledContactContainer = styled.div`
  background-color: var(--surface);
  color: var(--on-surface);
  padding: 2rem;
  width: 100%;
  height: 100%;

  h1 {
    line-height: 1;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;

    img {
      display: none;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    input,
    textarea {
      border: none;
      border-radius: 1rem;
      padding: 2rem 3rem;
      box-shadow: var(--shadow-lg);
      font-family: inherit;
      width: 100%;
    }

    textarea {
      resize: none;
      padding-top: 2.5rem;
      height: 15rem;
    }

    input:focus,
    textarea:focus {
      outline-color: var(--primary);
    }

    .button {
      button {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: var(--shadow-md);
        border: none;
        background-color: var(--primary);
        color: var(--on-primary);

        span {
          font-size: 2rem;
        }
        .icon {
          font-size: 2.5rem;
        }

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 1.5fr 2fr;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
`;

function ContactContainer() {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    sentEmail(form);
  }
  return (
    <StyledContactContainer>
      <h1>Contact</h1>
      <div className="container">
        <img src="/public/contactImg.png" alt="html label" />

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input
            type="mail"
            placeholder="E-mail Address"
            name="user_email"
            required
          />
          <input
            className="subject"
            type="text"
            placeholder="Subject"
            name="user_subject"
            required
          />
          <textarea placeholder="Message" name="message" required />
          <div className="button">
            <button type="submit">
              <TbMailForward className="icon" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </div>
    </StyledContactContainer>
  );
}

export default ContactContainer;
