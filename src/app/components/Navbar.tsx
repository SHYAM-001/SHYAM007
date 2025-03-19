"use client";

import { Bio } from "@constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  ButtonContainer,
  GithubButton,
  MobileIcon,
  MobileNavMenu,
} from "@styles/NavbarSytle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="/">Shyam</NavLogo>

        <MobileIcon onClick={toggleMenu}>
          <MenuIcon />
        </MobileIcon>

        {/* Desktop Menu */}
        <NavMenu>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#education">Education</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </NavMenu>

        {/* Mobile Menu */}
        <MobileNavMenu open={menuOpen}>
          <NavItem href="#about" onClick={() => setMenuOpen(false)}>
            About
          </NavItem>
          <NavItem href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </NavItem>
          <NavItem href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </NavItem>
          <NavItem href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavItem>
          <NavItem href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </NavItem>
          <NavItem href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavItem>
          <GithubButton
            href={Bio.github}
            target="_blank"
            onClick={() => setMenuOpen(false)}
          >
            Github Profile
          </GithubButton>
        </MobileNavMenu>

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
