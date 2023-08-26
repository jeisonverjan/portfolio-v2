import { styled } from "styled-components";

const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: blue;
`;

function Footer() {
  return <StyledFooter>FOOTER</StyledFooter>;
}

export default Footer;
