import { styled } from "styled-components";
import SocialIcon from "./SocialIcon";

const StyledSocialButtons = styled.div`
  margin-top: -2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  z-index: 1;
  border: none;
  display: grid;
  place-content: center;
  border-radius: 50%;
  box-shadow: var(--shadow-md);
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
  }
`;

function SocialButtons() {
  return (
    <StyledSocialButtons>
      <StyledButton>
        <SocialIcon type="like" />
      </StyledButton>
      <StyledButton>
        <SocialIcon type="love" />
      </StyledButton>
    </StyledSocialButtons>
  );
}

export default SocialButtons;
