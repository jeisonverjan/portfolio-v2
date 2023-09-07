import { styled } from "styled-components";

const StyledSpinner = styled.div`
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(4px);
`;
const SpinnerSpan = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid var(--background);
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid var(--primary);
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

function Spinner() {
  return (
    <StyledSpinner>
      <SpinnerSpan />
    </StyledSpinner>
  );
}

export default Spinner;
