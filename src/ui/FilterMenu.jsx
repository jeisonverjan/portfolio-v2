import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilterMenu = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 1.5rem;
`;

const ButtonFilter = styled.button`
  background-color: var(--secondary);
  color: var(--on-secondary);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
  text-transform: capitalize;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--primary);
      color: var(--on-primary);
    `}

  &:hover {
    filter: brightness(0.8);
  }
`;

function FilterMenu({ options, currentFilter }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    console.log("clicked");
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilterMenu>
      {options.map((option) => (
        <ButtonFilter
          key={option}
          active={currentFilter === option}
          disabled={currentFilter === option}
          onClick={() => handleClick(option)}
        >
          {option}
        </ButtonFilter>
      ))}
    </StyledFilterMenu>
  );
}

export default FilterMenu;
