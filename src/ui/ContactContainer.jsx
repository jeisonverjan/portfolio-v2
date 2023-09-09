import { styled } from "styled-components";
import ButtonLink from "./ButtonLink";
import { TbMailForward } from "react-icons/tb";

const StyledContactContainer = styled.form`
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
      display: flex;
      height: 4rem;
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
  return (
    <StyledContactContainer>
      <h1>Contact</h1>
      <div className="container">
        <img src="/public/contactImg.png" alt="html label" />
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="mail" placeholder="E-mail Address" required />
          <input
            className="subject"
            type="text"
            placeholder="Subject"
            required
          />
          <textarea placeholder="Message" required />
          <div className="button">
            <ButtonLink text="Send Message" type="primary" size="medium">
              <TbMailForward />
            </ButtonLink>
          </div>
        </form>
      </div>
    </StyledContactContainer>
  );
}

export default ContactContainer;
