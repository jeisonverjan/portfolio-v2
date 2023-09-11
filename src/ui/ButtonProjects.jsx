import { useNavigate } from "react-router-dom";
import ButtonLink from "./ButtonLink";
import { PiCardsBold } from "react-icons/pi";
import { styled } from "styled-components";

const StyledButtonProjects = styled.div`
  grid-area: projects-button;
  width: auto;
  margin: 0 auto;
`;

function ButtonProjects() {
  const navigate = useNavigate();
  return (
    <StyledButtonProjects>
      <ButtonLink
        text="Projects"
        type="primary"
        size="medium"
        onClick={() => navigate(`/projects`)}
      >
        <PiCardsBold />
      </ButtonLink>
    </StyledButtonProjects>
  );
}

export default ButtonProjects;
