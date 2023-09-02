import { styled } from "styled-components";
import ButtonLink from "./ButtonLink";
import { TbMailForward } from "react-icons/tb";

const StyledContactContainer = styled.form`
  background-color: var(--surface);
  color: var(--on-surface);
  display: grid;
  gap: 0.7rem;
  padding: 2rem;

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
    max-height: 1rem;
    margin: 2rem 0rem 2rem;
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
        <ButtonLink text="Send Message">
          <TbMailForward />
        </ButtonLink>
      </div>
    </StyledContactContainer>
  );
}

export default ContactContainer;
