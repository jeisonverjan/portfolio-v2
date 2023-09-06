import { styled } from "styled-components";
import IconSlider from "./IconSlider";

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  background-color: var(--background);
`;

function Footer() {
  return (
    <StyledFooter>
      <IconSlider />
    </StyledFooter>
  );
}

export default Footer;
