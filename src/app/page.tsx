"use client";

import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "@utils/Theme";
import Navbar from "@components/Navbar";
import HeroSection from "@components/sections/HeroSection";
import SkillSection from "@components/sections/SkillSection";
import ExperienceSection from "@components/sections/ExperienceSection";
import EducationSection from "@components/sections/EducationSection";
import ProjectSection from "@components/sections/ProjectSection";
import ContactSection from "@components/sections/ContactSection";
import Footer from "@components/Footer";
import { Suspense, lazy } from "react";

const StartCanvas = lazy(() => import("@canvas/Stars")); 

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
`;

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <Suspense fallback={null}>
          <StartCanvas />
        </Suspense>
        <div>
          <HeroSection />
          <Wrapper>
            <SkillSection />
            <ExperienceSection />
          </Wrapper>
          <ProjectSection />
          <Wrapper>
            <EducationSection />
            <ContactSection />
          </Wrapper>
          <Footer />
        </div>
      </Body>
    </ThemeProvider>
  );
}
