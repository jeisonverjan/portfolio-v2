import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import { useGetProjects } from "./useGetProjects";
import Spinner from "../ui/Spinner";

const StyledFlicking = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  display: grid;
  place-content: center;

  .project-container {
    width: 300px;
    margin: 2rem;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`;

function ProjectSlider() {
  const { isLoading, data: projects } = useGetProjects();
  const [searchParams] = useSearchParams();

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
    <StyledFlicking>
      <Flicking align="prev" circular={true} inputType={["touch", "mouse"]}>
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-container">
            <ProjectCard project={project} />
          </div>
        ))}
      </Flicking>
    </StyledFlicking>
  );
}

export default ProjectSlider;
