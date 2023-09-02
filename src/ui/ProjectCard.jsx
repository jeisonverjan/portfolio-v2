import { styled } from "styled-components";

const StyledProjectCard = styled.div`
  //max-width: auto;
  //height: 350px;
  border: 1px solid;
  //margin: 0 auto;

  .image {
    height: auto;
    min-height: 250px;
    img {
        height: 100%;
        object-fit: cover;
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
      <div className="social-buttons"></div>
      <div className="project-info"></div>
      <div className="project-links"></div>
      <div className="project-reactions"></div>
    </StyledProjectCard>
  );
}

export default ProjectCard;
