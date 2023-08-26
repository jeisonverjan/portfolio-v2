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
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: space-around;

  a {
    font-size: 2.5rem;
    line-height: 0;
    margin: 0;
    padding: 0;
    box-shadow: var(--shadow-sm);
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
      <a href={WHATSAPP_URL} target="blanc">
        <BsWhatsapp />
      </a>
      <a href={LINKEDIN_URL} target="blanc">
        <BsLinkedin />
      </a>
      <a href={GITHUB_URL} target="blanc">
        <BsGithub />
      </a>
    </StyledContactIcons>
  );
}

export default ContactIcons;
