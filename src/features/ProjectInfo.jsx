import { styled } from "styled-components";

const ProjectInfo = styled.div`
  grid-row: 3;
  margin-top: 0.5rem;
  text-align: center;
  padding: 0rem 2rem;
  display: grid;
  gap: 1rem;
  color: var(--on-surface);
  h1 {
    font-family: "Rubik";
    text-transform: uppercase;
    font-size: ${(props) => props.fontSizeTitle || "2.5rem"};
  }
  p {
    text-align: justify;
    font-weight: 600;
    font-family: inherit;
    font-size: ${(props) => props.fontSizeText || "2rem"};
  }
`;

export default ProjectInfo;
