import { styled } from "styled-components";
import Filter from "./Filter";
import ProjectGallery from "./ProjectGallery";

const StyledProjectsContainer = styled.div`
  background-color: var(--surface);
  color: var(--on-surface);
  padding: 2rem;
  display: grid;
  gap: 2rem;
`;

function ProjectsContainer() {
  return (
    <StyledProjectsContainer>
      <h1>Projects</h1>
      <Filter />
      <ProjectGallery />
    </StyledProjectsContainer>
  );
}

export default ProjectsContainer;
