import { styled } from "styled-components";
import { useSearchParams } from "react-router-dom";
import { MdViewCarousel } from "react-icons/md";
import { MdViewModule } from "react-icons/md";

import FilterSelect from "./FilterSelect";
import FilterMenu from "./FilterMenu";

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

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

const View = styled.div`
  line-height: 0;
  display: flex;
  gap: 1rem;
  font-size: 2.5rem;
  color: var(--secondary);
  cursor: pointer;

  .active {
    color: var(--primary);
  }
`;

const options = ["all", "advanced", "intermediate", "beginner"];

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";
  const currentView = searchParams.get("view") || "slider";

  function handleClick(value) {
    searchParams.set("view", value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      <div className="filter-select">
        <FilterSelect currentFilter={currentFilter} options={options} />
      </div>
      <div className="filter-menu">
        <FilterMenu currentFilter={currentFilter} options={options} />
      </div>
      <View>
        <MdViewCarousel
          onClick={() => handleClick("slider")}
          className={currentView === "slider" ? "active" : ""}
        />
        <MdViewModule
          onClick={() => handleClick("gallery")}
          className={currentView === "gallery" ? "active" : ""}
        />
      </View>
    </StyledFilter>
  );
}

export default Filter;
