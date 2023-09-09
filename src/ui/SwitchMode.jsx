import { styled } from "styled-components";
import { BsSun } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

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
    font-size: 1.9rem;
    width: 70px;
    height: 45px;
    border-radius: 100px;
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      background-color: var(--on-secondary);
      width: 35px;
      height: 35px;
      border-radius: 100px;
      top: 4px;
      left: ${(props) => (props.isdarkmode === "false" ? "5px" : "28px")};
      transition: 0.4s;
    }
  }
`;

function SwitchMode() {
  //const [isDarkModeLocal, setIsDarkMode] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();


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
