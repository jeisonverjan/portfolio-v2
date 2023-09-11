import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLogo = styled.span`
  grid-area: logo;
  color: var(--primary);
  font-family: "Rubik", sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 3rem;
`;

function Logo() {
  return (
    <Link to={"/"}>
      <StyledLogo>&lt;jv&#47;&gt;</StyledLogo>
    </Link>
  );
}

export default Logo;
