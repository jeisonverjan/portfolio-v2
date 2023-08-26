import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledNav = styled.nav`
  grid-area: menu;
  display: grid;
  grid-template-columns: repeat(2, max-content);
`;

const NavList = styled.ul`
  background-color: var(--primary-variant);
  position: absolute;
  top: 8rem;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  padding-top: 1rem;
  display: grid;
  align-content: start;
  gap: 2em;
  padding-left: 5%;
  opacity: ${(props) => (props.menuopen === "true" ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;

  li {
    display: ${(props) => (props.menuopen === "false" ? "none" : "block")};
  }

  @media (min-width: 768px) {
    background-color: var(--background);
    grid-template-columns: repeat(4, max-content);
    align-content: center;
    position: unset;
    width: 100%;
    padding-top: 0;
    padding-left: 0;
    opacity: 1;
    li {
      display: block;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 1.5rem;
`;

const NavIcon = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 3rem;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Icon = styled.div`
  opacity: ${(props) => (props.show === "true" ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
  grid-area: 1 / 1 / 2 / 2;
  color: var(--on-background);
`;

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNav>
      <NavList menuopen={String(menuOpen)}>
        <li>
          <StyledNavLink to="/" onClick={toggleMenu}>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects" onClick={toggleMenu}>
            Projects
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about" onClick={toggleMenu}>
            About me
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact" onClick={toggleMenu}>
            Contact
          </StyledNavLink>
        </li>
      </NavList>
      <NavIcon onClick={toggleMenu}>
        <Icon show={String(!menuOpen)}>
          <AiOutlineMenu />
        </Icon>
        <Icon show={String(menuOpen)}>
          <AiOutlineClose />
        </Icon>
      </NavIcon>
    </StyledNav>
  );
}

export default Nav;
