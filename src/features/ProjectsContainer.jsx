import { styled } from "styled-components";
import Filter from "../ui/Filter";
import ProjectGallery from "./ProjectGallery";
import ProjectSlider from "../features/ProjectSlider";
import { useSearchParams } from "react-router-dom";

const StyledProjectsContainer = styled.div`
  background-color: var(--surface);
  color: var(--on-surface);
  padding: 1rem 2rem;
  display: grid;
  gap: 1rem;
`;

function ProjectsContainer() {
  const [searchParams] = useSearchParams();
  const currentView = searchParams.get("view") || "slider";

  return (
    <StyledProjectsContainer>
      <h1>Projects</h1>
      <Filter />
      {currentView === "slider" && <ProjectSlider />}
      {currentView === "gallery" && <ProjectGallery />}
    </StyledProjectsContainer>
  );
}

export default ProjectsContainer;
