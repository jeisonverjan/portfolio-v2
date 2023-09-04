import { styled } from "styled-components";
import ButtonLink from "./ButtonLink";
import { TbMailForward } from "react-icons/tb";

const StyledContactContainer = styled.form`
  background-color: var(--surface);
  color: var(--on-surface);
  display: grid;
  gap: 0.7rem;
  padding: 2rem;
  height: 100%;

  input,
  textarea {
    border: none;
    border-radius: 1rem;
    padding: 0rem 3rem;
    box-shadow: var(--shadow-lg);
    font-family: inherit;
  }

  textarea {
    resize: none;
    padding-top: 1rem;
  }

  input:focus,
  textarea:focus {
    outline-color: var(--primary);
  }

  .button {
    display: flex;
    height: 4rem;
    //margin: 50rem 0rem 0rem;
  }

  h1 {
    line-height: 1;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 30%);
    justify-content: center;
    gap: 1rem;
    textarea {
      grid-column: 1 / span 2;
      max-height: 15rem;
    }
    h1 {
      grid-column: 1 / span 2;
    }
    .subject {
      grid-column: 1 / span 2;
    }
    .button {
      margin-top: 0;
    }
  }
`;

function ContactContainer() {
  return (
    <StyledContactContainer>
      <h1>Contact</h1>
      <input type="text" placeholder="Full Name" required />
      <input type="mail" placeholder="E-mail Address" required />
      <input className="subject" type="text" placeholder="Subject" required />
      <textarea placeholder="Message" required />
      <div className="button">
        <ButtonLink text="Send Message" type="primary" size="medium">
          <TbMailForward />
        </ButtonLink>
      </div>
    </StyledContactContainer>
  );
}

export default ContactContainer;
