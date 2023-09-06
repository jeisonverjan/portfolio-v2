import { styled } from "styled-components";
import Header from "../ui/Header";
import ProjectContainer from "../ui/ProjectContainer";

const StyledProject = styled.div`
  background-color: var(--surface);
  min-height: 100dvh;
  overflow: hidden;
`;

function Project() {
  return (
    <StyledProject>
      <Header />
      <ProjectContainer />
    </StyledProject>
  );
}

export default Project;
