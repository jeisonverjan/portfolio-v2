import { styled } from "styled-components";

const StyledButtonLink = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-lg);
  background-color: var(--primary);
  color: var(--on-primary);
  padding: 2rem 1rem;
  cursor: pointer;
  width: auto;
  height: auto;

  &:hover {
    filter: brightness(0.8);
  }

  .icon {
    font-size: 2.5rem;
    line-height: 0;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

function ButtonLink({ children, text }) {
  return (
    <StyledButtonLink>
      <span className="icon">{children}</span>
      <span className="text">{text}</span>
    </StyledButtonLink>
  );
}

export default ButtonLink;
