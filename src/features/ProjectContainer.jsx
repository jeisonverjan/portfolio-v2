import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { TiArrowBack } from "react-icons/ti";

import SocialButtons from "../ui/SocialButtons";
import TextReducer from "../ui/TextReducer";
import SkillsIcons from "../ui/SkillsIcons";

import ProjectReactions from "./ProjectReactions";
import ProjectInfo from "./ProjectInfo";
import { useGetProjectById } from "./useGetProjectById";
import Spinner from "../ui/Spinner";

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1rem;
`;

const Button = styled.button`
  border: none;
  border-radius: 1rem;
  background-color: var(--primary);
  color: var(--on-primary);
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0.5rem 1rem;

  span {
    font-size: 2rem;
  }

  &:hover {
    filter: opacity(0.8);
  }
`;

const StyledProjectContainer = styled.div`
  width: 100%;
  padding: 2rem 0rem;
  margin-top: 13rem;
  position: relative;

  .image {
    width: 100%;
    height: 25rem;
    transition: all 0.3s ease-in-out;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;

      &:hover {
        filter: opacity(0.9);
      }
    }
  }

  @media (min-width: 768px) {
    margin-top: 6rem;

    .image {
      height: 35rem;
    }
  }
  @media (min-width: 1200px) {
    width: 60%;
    margin: 0 auto;
    margin-top: 6rem;
    box-shadow: var(--shadow-lg);
  }
`;

const Tag = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  span {
    font-size: 2rem;
    background-color: var(--secondary);
    color: var(--on-secondary);
    border-radius: 5rem;
    padding: 0.5rem 1.5rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    box-shadow: var(--shadow-md);
  }
`;

function ProjectContainer() {
  const navigate = useNavigate();
  const { isLoading, data: project } = useGetProjectById();
  if (isLoading) return <Spinner />;
  return (
    <StyledProjectContainer>
      {
        <div className="image">
          <a href={project.projectLink} target="_blank" rel="noreferrer">
            <img src={project.mainPicture} alt="screenshot of the web page" />
          </a>
        </div>
      }
      <SocialButtons projectId={project.id} padding="1.5rem" fontSize="4rem" />
      <BackContainer>
        <Button onClick={() => navigate(-1)}>
          <TiArrowBack />
          <span>Back</span>
        </Button>
        <ProjectReactions likes={project.likes} loves={project.loves} />
      </BackContainer>
      <ProjectInfo fontSizeTitle="3rem" fontSizeText="2rem">
        <h1>{project.name}</h1>
        <TextReducer numberWords={15}>{project.description}</TextReducer>
      </ProjectInfo>
      <SkillsIcons technology={project.technology} />
      <Tag>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tag>
    </StyledProjectContainer>
  );
}

export default ProjectContainer;
