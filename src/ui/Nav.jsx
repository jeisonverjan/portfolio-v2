import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledNav = styled.nav`
  z-index: 2;
  grid-area: menu;
  display: grid;
  grid-template-columns: repeat(2, max-content);
`;

const NavList = styled.ul`
  position: fixed;
  background-color: var(--surface);
  color: var(--on-surface);
  top: 15rem;
  bottom: 0;
  width: 100%;
  padding-top: 1rem;
  display: grid;
  align-content: start;
  gap: 2em;
  padding-left: 5%;
  left: ${(props) => (props.menuopen === "true" ? "0" : "-100%")};
  transition: left 0.4s ease-in-out, background-color 0.3s, border 0.3s;

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
  font-size: 3rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const NavIcon = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 4rem;
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
