"use client";

import { FaArrowUp } from "react-icons/fa";
import { FooterContainer, FooterWrapper,ResetButton } from "@styles/FooterStyle";


const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        Copyright © 2025 by SHYAM K S | All Rights Reserved.
      </FooterWrapper>
      <ResetButton href="#about"><FaArrowUp/></ResetButton>
    </FooterContainer>
  );
};

export default Footer;
