import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import ButtonLink from "../ui/ButtonLink";

const StyledProjectLinks = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-around;
`;

function ProjectLinks({ project }) {
  const navigate = useNavigate();
  return (
    <StyledProjectLinks>
      <ButtonLink
        text="show more"
        type="secondary"
        onClick={() => navigate(`/projects/${project.id}`)}
      ></ButtonLink>
      <ButtonLink
        text="visit site"
        type="secondary"
        href={project.projectLink}
      ></ButtonLink>
      <ButtonLink
        text="source code"
        type="secondary"
        href={project.projectCode}
      ></ButtonLink>
    </StyledProjectLinks>
  );
}

export default ProjectLinks;
