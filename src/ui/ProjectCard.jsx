import { styled } from "styled-components";
import SocialButtons from "./SocialButtons";
import ProjectLinks from "./ProjectLinks";
import ProjectReactions from "./ProjectReactions";

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
  .project-info {
    margin-top: 0.5rem;
    text-align: center;
    padding: 0rem 2rem;
    display: grid;
    gap: 1rem;
    color: var(--on-surface);
    h1 {
      font-family: "Rubik";
      text-transform: uppercase;
      font-size: 2.5rem;
    }
    p {
      text-align: justify;
      font-weight: 600;
      font-family: inherit;
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
      <div className="project-info">
        <h1>{project.name}</h1>
        <p>{project.shortDescription}</p>
      </div>
      <ProjectLinks />
      <ProjectReactions />
    </StyledProjectCard>
  );
}

export default ProjectCard;
