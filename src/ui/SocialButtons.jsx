import { useIncrementReaction } from "../features/useIncrementReaction";
import { useState } from "react";

import { styled } from "styled-components";
import { FaThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import SocialIcon from "./SocialIcon";

const StyledSocialButtons = styled.div`
  grid-row: 2;
  margin-top: -2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  transition: all 0.2s ease-in-out;

  .reaction-icon {
    font-size: 0rem;
    position: absolute;
    font-size: 0rem;
    animation: grow-shrink 2s;
    z-index: 2;
    top: 10rem;
  }
  .reaction-icon-initial {
    font-size: 0rem;
    display: none;
  }
  .like-icon {
    color: var(--blue-thumb);
    left: 8rem;
  }
  .love-icon {
    color: var(--red-heart);
    right: 8rem;
  }
  @keyframes grow-shrink {
    0% {
      font-size: 0;
    }
    50% {
      font-size: 10rem;
    }
    100% {
      font-size: 0;
    }
  }
`;

const StyledButton = styled.button`
  z-index: 1;
  border: none;
  display: grid;
  place-content: center;
  border-radius: 50%;
  box-shadow: var(--shadow-md);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
    transition: all 0.2s ease-in-out;
  }
`;

function SocialButtons({ projectId, padding, fontSize }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoved, setIsLoved] = useState(false);

  const { isLoading, updateLoves } = useIncrementReaction();

  //if (isLoading) return null;

  function handleLike(type) {
    setIsLiked(true);
    updateLoves({ projectId, type });
  }
  function handleLove(type) {
    setIsLoved(true);
    updateLoves({ projectId, type });
  }

  return (
    <StyledSocialButtons>
      <FaThumbsUp
        className={
          isLiked ? "reaction-icon like-icon" : "reaction-icon-initial"
        }
        onAnimationEnd={() => setIsLiked(false)}
      />
      <FaHeart
        className={
          isLoved ? "reaction-icon love-icon" : "reaction-icon-initial"
        }
        onAnimationEnd={() => setIsLoved(false)}
      />
      <StyledButton onClick={() => handleLike("likes")} disabled={isLoading}>
        <SocialIcon type="like" padding={padding} fontSize={fontSize} />
      </StyledButton>
      <StyledButton onClick={() => handleLove("loves")} disabled={isLoading}>
        <SocialIcon type="love" padding={padding} fontSize={fontSize} />
      </StyledButton>
    </StyledSocialButtons>
  );
}

export default SocialButtons;
