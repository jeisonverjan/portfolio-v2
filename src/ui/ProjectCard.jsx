import { styled } from "styled-components";
import SocialButtons from "./SocialButtons";
import ProjectLinks from "./ProjectLinks";
import ProjectReactions from "./ProjectReactions";
import ProjectInfo from "./ProjectInfo";
import TextReducer from "./TextReducer";

const StyledProjectCard = styled.div`
  box-shadow: var(--shadow-lg);
  border-radius: 1rem;

  .image {
    width: 100%;
    height: 20rem;
    transition: all 0.3s ease-in-out;

    :hover {
      transform: scale(1.05);
      filter: brightness(1.03);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 1rem 1rem 0rem 0rem;
      transition: all 0.3s ease-in-out;
    }
  }
`;

function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <div className="image">
        <a href={project.projectLink} target="_blank" rel="noreferrer">
          <img src={project.mainPicture} alt="screenshot of the web page" />
        </a>
      </div>
      <SocialButtons />
      <ProjectInfo>
        <h1>{project.name}</h1>
        <TextReducer>{project.shortDescription}</TextReducer>
      </ProjectInfo>
      <ProjectLinks project={project} />
      <ProjectReactions />
    </StyledProjectCard>
  );
}

export default ProjectCard;
