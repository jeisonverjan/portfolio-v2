import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { BsFillCaretDownFill } from "react-icons/bs";

const StyledFilterSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    font-weight: 600;
  }
`;

const StyledSelect = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-width: 15rem;

  select {
    border: none;
    appearance: none;
    width: 100%;
    padding: 0.5rem 1rem;
    color: var(--on-background);
    background-color: var(--background);
    //font-size: 1.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    font-family: inherit;
    box-shadow: var(--shadow-md);
    text-transform: capitalize;
    &:focus {
      outline: none;
    }
  }
  .icon-container {
    position: absolute;
    right: 0;
    display: grid;
    place-content: center;
    background-color: var(--primary-variant);
    height: 100%;
    width: 3rem;
    pointer-events: none;
    font-size: 2rem;
    transition: 0.25s all ease;
    color: var(--primary);
    border-radius: 0rem 0.5rem 0.5rem 0rem;
  }

  &:hover .icon-container {
    color: var(--background);
  }
`;

function FilterSelect({ currentFilter, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("filter", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <StyledFilterSelect>
      <label htmlFor="filter-select">Filter:</label>
      <StyledSelect>
        <select
          name="project-filter"
          id="filter-select"
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option} selected={currentFilter === option}>
              {option}
            </option>
          ))}
        </select>
        <div className="icon-container">
          <BsFillCaretDownFill />
        </div>
      </StyledSelect>
    </StyledFilterSelect>
  );
}

export default FilterSelect;
