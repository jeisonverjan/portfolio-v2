import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import { styled } from "styled-components";
import { tagIcons } from "../data/brandIcons";

const StyledFlicking = styled(Flicking)`
  overflow: hidden;
  a {
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
    gap: 0.5rem;
    background-color: var(--surface);
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    box-shadow: var(--shadow-lg);
    font-size: 5rem;

    span {
      color: var(--on-surface);
      font-size: 2.2rem;
      font-weight: bold;
    }
  }
  @media (min-width: 768px) {
    a {
      font-size: 2.5rem;
    }

    span {
      font-size: 1.3rem;
    }
  }
`;

const allSkills = Object.keys(tagIcons);

function IconSlider({ technology = allSkills }) {
  const plugins = [
    new AutoPlay({ duration: 2500, direction: "NEXT", stopOnHover: false }),
  ];
  return (
    <StyledFlicking
      plugins={plugins}
      moveType="freeScroll"
      bound={true}
      circular={true}
    >
      {technology.map((tag, index) => {
        const TagIcon = tagIcons[tag].tag;
        const color = tagIcons[tag].color;
        const label = tagIcons[tag].label;
        const link = tagIcons[tag].link;
        return (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            key={index}
            style={{ color }}
          >
            <TagIcon />
            <span>{label}</span>
          </a>
        );
      })}
    </StyledFlicking>
  );
}

export default IconSlider;
