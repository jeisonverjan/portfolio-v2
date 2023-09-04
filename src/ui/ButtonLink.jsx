import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1rem;
    padding: 1rem 1rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;

    .icon {
      font-size: 1.5rem;
    }
  `,
  medium: css`
    font-size: 1.5rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;

    .icon {
      font-size: 2rem;
      line-height: 0;
    }
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const style = {
  primary: css`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    background-color: ${(props) =>
      props.type === "primary" ? "var(--primary)" : "var(--secondary)"};
    color: ${(props) =>
      props.type === "primary" ? "var(--on-primary)" : "var(--on-secondary)"};
    cursor: pointer;
  `,
};

const StyledButtonLink = styled.a`
  ${(props) => style["primary"]}
  ${(props) => sizes[props.size]}

  &:hover {
    filter: brightness(0.8);
  }
`;

function ButtonLink({ children, text, type, size, href, onClick, target }) {
  return (
    <StyledButtonLink
      type={type}
      size={size}
      href={href}
      onClick={onClick}
      target={target}
    >
      {children && <span className="icon">{children}</span>}
      <span className="text">{text}</span>
    </StyledButtonLink>
  );
}

ButtonLink.defaultProps = {
  type: "primary",
  size: "small",
  role: "link",
  target: "_blank",
};

export default ButtonLink;
