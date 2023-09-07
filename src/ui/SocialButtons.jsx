import { useIncrementLoves } from "../features/useIncrementLoves";
import { styled } from "styled-components";

import SocialIcon from "./SocialIcon";
import Spinner from "../ui/Spinner";

const StyledSocialButtons = styled.div`
  margin-top: -2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  transition: all 0.2s ease-in-out;
`;

const StyledButton = styled.button`
  z-index: 1;
  border: none;
  display: grid;
  place-content: center;
  border-radius: 50%;
  box-shadow: var(--shadow-md);
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
    transition: all 0.2s ease-in-out;
  }
`;

function SocialButtons({ projectId, padding, fontSize }) {
  const { isLoading, updateLoves } = useIncrementLoves();

  if (isLoading) return <Spinner />;

  function handleClick(type) {
    console.log(projectId);
    updateLoves({ projectId, type });
  }

  return (
    <StyledSocialButtons>
      <StyledButton onClick={() => handleClick("likes")} disabled={isLoading}>
        <SocialIcon type="like" padding={padding} fontSize={fontSize} />
      </StyledButton>
      <StyledButton onClick={() => handleClick("loves")} disabled={isLoading}>
        <SocialIcon type="love" padding={padding} fontSize={fontSize} />
      </StyledButton>
    </StyledSocialButtons>
  );
}

export default SocialButtons;
