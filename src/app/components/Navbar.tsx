"use client";

import { Bio } from "@constants/constants";
import MenuIcon from "@mui/icons-material/Menu";
import { BioProps } from "./sections/HeroSection";
import { useState } from "react";
import Image from "next/image";
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
} from "@styles/NavbarSytle";

const bioData: BioProps = Bio;

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prevState: boolean) => !prevState);
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
            <SocialMediaLink
              href={bioData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="./github2.png" alt="github" width={34} height={34} />
            </SocialMediaLink>
            <SocialMediaLink
              href={bioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./LinkedIn.png"
                alt="linkedin"
                width={34}
                height={34}
              />
            </SocialMediaLink>
            <SocialMediaLink
              href={bioData.insta}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./Instagram.png"
                alt="instagram"
                width={34}
                height={34}
              />
            </SocialMediaLink>
            <SocialMediaLink
              href={bioData.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./Facebook.png"
                alt="facebook"
                width={34}
                height={34}
              />
            </SocialMediaLink>
          </SocialMediaPhoneContainer>
        </MobileNavMenu>

        <SocialMediaContainer>
          <SocialMediaLink
            href={bioData.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="./github2.png" alt="github" width={34} height={34} />
          </SocialMediaLink>
          <SocialMediaLink
            href={bioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="./LinkedIn.png" alt="linkedin" width={34} height={34} />
          </SocialMediaLink>
          <SocialMediaLink
            href={bioData.insta}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="./Instagram.png"
              alt="instagram"
              width={34}
              height={34}
            />
          </SocialMediaLink>
          <SocialMediaLink
            href={bioData.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="./Facebook.png" alt="facebook" width={34} height={34} />
          </SocialMediaLink>
        </SocialMediaContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
