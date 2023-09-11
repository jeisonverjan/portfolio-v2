import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";
import Filter from "../ui/Filter";
import ProjectGallery from "./ProjectGallery";
import ProjectSlider from "./ProjectSlider";

const StyledProjectsContainer = styled.div`
  color: var(--on-surface);
  padding: 1rem 2rem;
  display: grid;
  gap: 2rem;
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
