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
import { Body, Wrapper } from "@/app/styles/PortfolioStyle";
import AchievementSections from "@components/sections/AchievementSections";

export default function Portfolio() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Body>
        <div>
          <HeroSection />
          <Wrapper>
            <SkillSection />
            <ExperienceSection />
          </Wrapper>
          <AchievementSections />
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
