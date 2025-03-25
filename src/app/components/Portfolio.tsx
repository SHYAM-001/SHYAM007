"use client";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "@utils/Theme";
import Navbar from "@components/Navbar";
import dynamic from "next/dynamic";
/* import { useState, useEffect } from "react";
import Loader from "@components/animations/Loader"; */
import { AnimatePresence, motion } from "framer-motion";
import { Body, Wrapper } from "@/app/styles/PortfolioStyle";


const HeroSection = dynamic(() => import("@components/sections/HeroSection"), {
  ssr: false,
});
const SkillSection = dynamic(
  () => import("@components/sections/SkillSection"),
  { ssr: false }
);
const ExperienceSection = dynamic(
  () => import("@components/sections/ExperienceSection"),
  { ssr: false }
);
const EducationSection = dynamic(
  () => import("@components/sections/EducationSection"),
  { ssr: false }
);
const ProjectSection = dynamic(
  () => import("@components/sections/ProjectSection"),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import("@components/sections/ContactSection"),
  { ssr: false }
);
const Footer = dynamic(() => import("@components/Footer"), { ssr: false });
const AchievementSections = dynamic(
  () => import("@components/sections/AchievementSections"),
  { ssr: false }
);

export default function Portfolio() {
  /* const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulated load time
    return () => clearTimeout(timeout);
  }, []); */

  return (
    <ThemeProvider theme={darkTheme}>
      <AnimatePresence mode="wait">
        {/* {loading ? (
          <Loader />
        ) : ( */}
        <motion.div
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
        {/* )} */}
      </AnimatePresence>
    </ThemeProvider>
  );
}
