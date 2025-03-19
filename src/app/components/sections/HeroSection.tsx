"use client";

import { Bio } from "@/app/constants/constants";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import HeroBgAnimation from "@animations/HeroBgAnimation";
import { motion } from "framer-motion";
import StartCanvas from "@canvas/Stars";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "@utils/motion";
import {
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  Title,
  TextLoop,
  Span,
  ResumeButton,
  SubTitle,
  HeroRightContainer,
  Img,
  HeroBg,
} from "@/app/styles/sections/HeroSectionStyles";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <StartCanvas />
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I&apos;m <br /> {Bio.name}
                </Title>
              </motion.div>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <ResumeButton>Check Resume</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                {/* <Tilt>
                  <Img src="/shyam.png  " alt={Bio.name} />
                </Tilt> */}
                <Img src="./shyam.png  " alt={Bio.name} />
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
