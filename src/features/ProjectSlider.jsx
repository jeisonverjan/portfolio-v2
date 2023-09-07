import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { styled } from "styled-components";
import ProjectCard from "./ProjectCard";
import { useGetProjects } from "./useGetProjects";
import Spinner from "../ui/Spinner";

const StyledFlicking = styled.div`
  width: 100%;
  height: auto;
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

  if (isLoading) return <Spinner />;

  return (
    <StyledFlicking>
      <Flicking align="prev" circular={true} inputType={["touch", "mouse"]}>
        {projects.map((project, index) => (
          <div key={index} className="project-container">
            <ProjectCard project={project} />
          </div>
        ))}
      </Flicking>
    </StyledFlicking>
  );
}

export default ProjectSlider;
