import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: white;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

export const NavLogo = styled.a`
  width: 80%;
  padding: 0 6px;
  text-decoration: none;
  color: inherit;
`;

export const NavMenu = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const SocialMediaContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: end;
  align-items: center;
  padding: 5px 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SocialMediaPhoneContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: end;
  align-items: center;
  padding: 5px 6px;
`;

export const SocialMediaLink = styled.a`
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(1.2) translateY(-5px);
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const MobileNavMenu = styled.ul`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 16px;
  padding: 10px;
  position: absolute;
  border-radius: 0 0 20px 20px;
  top: 80px;
  left: 0;
  right: 0;
  transition: all 0.6s ease-in-out;
  background-color: ${({ theme }) => theme.bg};
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  list-style: none;
  z-index: 100;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;
