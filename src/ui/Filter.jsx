import { styled } from "styled-components";
import FilterSelect from "./FilterSelect";
import FilterMenu from "./FilterMenu";
import { useSearchParams } from "react-router-dom";

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .filter-menu {
    display: none;
  }
  @media (min-width: 768px) {
    .filter-select {
      display: none;
    }
    .filter-menu {
      display: block;
    }
  }
`;

const options = ["all", "advanced", "intermediate", "beginner"];

function Filter() {
  const [searchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";

  return (
    <StyledFilter>
      <div className="filter-select">
        <FilterSelect currentFilter={currentFilter} options={options} />
      </div>
      <div className="filter-menu">
        <FilterMenu currentFilter={currentFilter} options={options} />
      </div>
    </StyledFilter>
  );
}

export default Filter;
