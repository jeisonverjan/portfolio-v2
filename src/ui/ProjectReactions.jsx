import { styled } from "styled-components";
import SocialIcon from "./SocialIcon";

const StyledProjectReactions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  margin: 0rem 2rem 2rem;
`;

const ReactionContainer = styled.div`
  display: flex;
  //background-color: red;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  gap: 0.1rem;
`;

function ProjectReactions() {
  return (
    <StyledProjectReactions>
      <ReactionContainer>
        <SocialIcon type="like" fontSize="1.5rem" padding="0.5rem" />
        <span></span>
        <span>450K</span>
      </ReactionContainer>
      <ReactionContainer>
        <SocialIcon type="love" fontSize="1.5rem" padding="0.5rem" />
        <span></span>
        <span>50K</span>
      </ReactionContainer>
    </StyledProjectReactions>
  );
}

export default ProjectReactions;
