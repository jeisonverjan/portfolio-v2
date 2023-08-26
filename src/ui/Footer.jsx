import { styled } from "styled-components";
import SliderTest from "./SliderTest";

const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: blue;
`;

function Footer() {
  return <SliderTest />;
}

export default Footer;
