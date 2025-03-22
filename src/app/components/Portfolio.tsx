"use client";

import { ThemeProvider } from "styled-components";
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
import { Body, Wrapper } from "@/app/styles/PortfolioStyle";

const StartCanvas = lazy(() => import("@canvas/Stars"));

export default function Portfolio() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        {/* <Suspense fallback={null}>
          <StartCanvas />
        </Suspense> */}
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
