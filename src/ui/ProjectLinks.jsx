import ButtonLink from "./ButtonLink";
import { styled } from "styled-components";

const StyledProjectLinks = styled.div`
  display: flex;
  //background-color: red;
  padding: 2rem;
  justify-content: space-around;
`;

const StyledButtonLink = styled(ButtonLink)``;

function ProjectLinks() {
  return (
    <StyledProjectLinks>
      <StyledButtonLink>More</StyledButtonLink>
      <StyledButtonLink>Visit</StyledButtonLink>
      <StyledButtonLink>Code</StyledButtonLink>
    </StyledProjectLinks>
  );
}

export default ProjectLinks;
