import { useState } from "react";
import { styled } from "styled-components";

const StyledTextReducer = styled.p`
  transition: all 0.3s ease-in-out;

  span {
    font-weight: bold;
    color: var(--primary);
    margin-left: 1rem;
    cursor: pointer;

    :hover {
      filter: brightness(0.8);
    }
  }
`;

function TextReducer({ children, numberWords }) {
  const [showMore, setShowMore] = useState(false);
  const textReduced = children.split(" ").slice(0, numberWords).join(" ");

  return (
    <StyledTextReducer>
      {!showMore ? textReduced : children}.
      {numberWords && (
        <span onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show less" : "Show More..."}
        </span>
      )}
    </StyledTextReducer>
  );
}

export default TextReducer;
