"use client";

import { Bio } from "@constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import { BioProps } from "./sections/HeroSection";
import { useState } from "react";
import Image from "next/image";
import github  from "@photos/github2.png";
import linkedin from "@photos/LinkedIn.png";
import insta from "@photos/Instagram.png";
import facebook from "@photos/Facebook.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  SocialMediaLink,
  SocialMediaContainer,
  MobileIcon,
  MobileNavMenu,
  SocialMediaPhoneContainer,
} from "@styles/NavbarStyle";


const bioData: BioProps = Bio;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="#about">Shyam</NavLogo>

        <MobileIcon onClick={toggleMenu} aria-expanded={menuOpen}>
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

          <SocialMediaPhoneContainer>
            <SocialMediaLink href={bioData.github} target="_blank">
              <Image src={github} alt="github" width={34} height={34} />
            </SocialMediaLink>
            <SocialMediaLink href={bioData.linkedin} target="_blank">
              <Image src={linkedin} alt="linkedin" width={34} height={34} />
            </SocialMediaLink>
            <SocialMediaLink href={bioData.insta} target="_blank">
              <Image src={insta} alt="instagram" width={34} height={34} />
            </SocialMediaLink>
            <SocialMediaLink href={bioData.facebook} target="_blank">
              <Image src={facebook} alt="facebook" width={34} height={34} />
            </SocialMediaLink>
          </SocialMediaPhoneContainer>
        </MobileNavMenu>

        <SocialMediaContainer>
        <SocialMediaLink href={bioData.github} target="_blank">
              <Image src={github} alt="github" width={34} height={34} />
            </SocialMediaLink>
            <SocialMediaLink href={bioData.linkedin} target="_blank">
              <Image src={linkedin} alt="linkedin" width={34} height={34} />
            </SocialMediaLink>
            <SocialMediaLink href={bioData.insta} target="_blank">
              <Image src={insta} alt="instagram" width={34} height={34} />
            </SocialMediaLink>
            <SocialMediaLink href={bioData.facebook} target="_blank">
              <Image src={facebook} alt="facebook" width={34} height={34} />
            </SocialMediaLink>
        </SocialMediaContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
