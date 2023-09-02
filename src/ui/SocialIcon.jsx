import { FaThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { styled } from "styled-components";

const StyledSocialIcon = styled.div`
  //pointer-events: none;
  display: inline-block;
  max-width: fit-content;
  line-height: 0;
  background-color: ${(props) =>
    props.type === "like" ? "var(--blue-thumb)" : "var(--red-heart)"};
  color: #fff;
  max-width: auto;
  border-radius: 50%;
  padding: ${(props) => props.padding || "1rem"};
  font-size: ${(props) => props.fontSize || "3rem"};
  transition: all 0.2s ease-in-out;

  .icon {
    pointer-events: none;
  }
`;

function SocialIcon({ padding = "1rem", fontSize = "3rem", type }) {
  return (
    <StyledSocialIcon padding={padding} fontSize={fontSize} type={type}>
      {type === "like" && <FaThumbsUp className="icon" />}
      {type === "love" && <FaHeart className="icon" />}
    </StyledSocialIcon>
  );
}

export default SocialIcon;
