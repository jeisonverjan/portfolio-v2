import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

import Spinner from "../ui/Spinner";
import ProjectCard from "./ProjectCard";
import { useGetProjects } from "./useGetProjects";

const StyledProjectGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  scroll-behavior: smooth;
`;

function ProjectGallery() {
  const [searchParams] = useSearchParams();
  const { isLoading, data: projects } = useGetProjects();

  if (isLoading) return <Spinner />;

  //FILTER
  const filterValue = searchParams.get("filter") || "all";
  let filteredProjects;

  if (filterValue === "all") filteredProjects = projects;
  if (filterValue === "advanced")
    filteredProjects = projects.filter(
      (project) => project.difficultyLevel === "advanced"
    );
  if (filterValue === "intermediate")
    filteredProjects = projects.filter(
      (project) => project.difficultyLevel === "intermediate"
    );
  if (filterValue === "beginner")
    filteredProjects = projects.filter(
      (project) => project.difficultyLevel === "beginner"
    );

  return (
    <StyledProjectGallery>
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </StyledProjectGallery>
  );
}

export default ProjectGallery;
