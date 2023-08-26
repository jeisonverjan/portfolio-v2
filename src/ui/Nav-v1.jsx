import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { styled } from "styled-components";

const StyledNav = styled.nav``;

const NavList = styled.ul`
  padding: 3rem 3rem;
  transform: ${(props) =>
    props.menuopen === "false" ? "translateX(-100%)" : "translateX(0)"};
  
  transition: transform 0.5s ease-in-out;
  background-color: lightgreen;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  text-transform: uppercase;
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.show === "true" ? 1 : 0)};
  transition: opacity 0.4s ease-in-out;
`;

const NavIcon = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 3rem;
`;

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledNav>
      <NavList menuopen={String(menuOpen)}>
        <NavItem>
          <NavLink>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Contacts</NavLink>
        </NavItem>
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
