import { styled } from "styled-components";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { WHATSAPP_URL } from "../utils/constants";
import { LINKEDIN_URL } from "../utils/constants";
import { GITHUB_URL } from "../utils/constants";

const StyledContactIcons = styled.div`
  grid-area: contactIcons;
  background-color: var(--surface);
  padding: 1rem 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  justify-content: center;

  a {
    font-size: 3rem;
    line-height: 0;
    margin: 0;
    padding: 0;
    box-shadow: var(--shadow-sm);
    color: var(--primary);
  }

  a:hover {
    transform: scale(0.9);
    transition: transform 0.2s ease-in-out;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
    a {
      font-size: 4.5rem;
    }
  }
`;

function ContactIcons() {
  return (
    <StyledContactIcons>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        <BsWhatsapp />
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href={GITHUB_URL} target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </StyledContactIcons>
  );
}

export default ContactIcons;
