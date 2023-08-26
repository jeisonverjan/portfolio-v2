import { styled } from "styled-components";

const StyledLogo = styled.span`
  grid-area: logo;
  color: var(--primary);
  font-family: "Rubik", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 2rem;
`;

function Logo() {
  return <StyledLogo>&lt;jv&#47;&gt;</StyledLogo>;
}

export default Logo;
