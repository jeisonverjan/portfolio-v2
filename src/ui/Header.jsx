import { styled } from "styled-components";
import Nav from "./Nav";
import Logo from "./Logo";
import SwitchMode from "./SwitchMode";

const StyledHeader = styled.header`
  z-index: 1;
  grid-area: header;
  display: grid;
  place-content: center;
  justify-content: space-around;
  grid-template: "menu logo switch";
  background-color: var(--background);
  box-shadow: var(--shadow-sm);

  @media (min-width: 768px) {
    grid-template: "logo menu switch";
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    padding: 0 5rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Nav />
      <Logo />
      <SwitchMode />
    </StyledHeader>
  );
}

export default Header;
