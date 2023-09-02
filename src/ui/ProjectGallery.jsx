import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const StyledProjectGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  scroll-behavior: smooth;
`;

function ProjectGallery() {
  return (
    <StyledProjectGallery>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </StyledProjectGallery>
  );
}

export default ProjectGallery;
