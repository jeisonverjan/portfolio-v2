import { styled } from "styled-components";
import SocialIcon from "../ui/SocialIcon";

const StyledProjectReactions = styled.div`
  grid-row: 5;
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  padding: 0.5rem;
`;

const ReactionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  gap: 0.1rem;
  color: var(--on-surface);
`;

function ProjectReactions({ loves, likes, projectId }) {
  return (
    <StyledProjectReactions>
      <ReactionContainer>
        <SocialIcon type="like" fontSize="1.5rem" padding="0.5rem" />
        <span>{likes}</span>
        {/* <span>{isLiked === "true" ? " You like it!" : ""}</span> */}
      </ReactionContainer>
      <ReactionContainer>
        <SocialIcon type="love" fontSize="1.5rem" padding="0.5rem" />
        <span>{loves}</span>
        {/* <span>{isLoved ? " You love it!" : ""}</span> */}
      </ReactionContainer>
    </StyledProjectReactions>
  );
}

export default ProjectReactions;
