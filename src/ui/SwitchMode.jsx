import { useState } from "react";
import { styled } from "styled-components";
import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";

const StyledSwitchMode = styled.div`
  grid-area: switch;
  input {
    display: none;
  }

  label {
    background-color: var(--on-background);
    color: var(--on-secondary);
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;
    width: 55px;
    height: 30px;
    border-radius: 100px;
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      background-color: var(--on-secondary);
      width: 22px;
      height: 22px;
      border-radius: 100px;
      top: 4px;
      left: ${(props) => (props.isdarkmode === "false" ? "5px" : "28px")};
      transition: 0.4s;
    }
  }

`;

function SwitchMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <StyledSwitchMode isdarkmode={String(isDarkMode)}>
      <input type="checkbox" id="btn-switch" onChange={toggleDarkMode} />
      <label htmlFor="btn-switch">
        <BsSun />
        <BsMoonStars />
      </label>
    </StyledSwitchMode>
  );
}

export default SwitchMode;
