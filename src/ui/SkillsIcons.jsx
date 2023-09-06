import { styled } from "styled-components";
import { tagIcons } from "../data/brandIcons";

const StyledSkillsIcon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
  font-size: 4rem;
  gap: 1rem;
  line-height: 0;

  a {
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease-in-out;

    :hover {
      box-shadow: var(--shadow-lg);
      filter: brightness(0.8);
      transition: 0.3s;
    }
  }
`;

function SkillsIcons({ technology }) {
  return (
    <StyledSkillsIcon>
      {technology.map((tag, index) => {
        const TagIcon = tagIcons[tag].tag;
        const color = tagIcons[tag].color;
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
          </a>
        );
      })}
    </StyledSkillsIcon>
  );
}

export default SkillsIcons;
