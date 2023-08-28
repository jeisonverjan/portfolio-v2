import { styled } from "styled-components";
import IconGenerator from "./IconGenerator";

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  background-color: var(--background);
`;

function Footer() {
  return (
    <StyledFooter>
      <IconGenerator />
    </StyledFooter>
  );
}

export default Footer;
