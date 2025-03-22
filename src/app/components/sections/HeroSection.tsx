"use client";

import { Bio } from "@/app/constants/constants";
import Typewriter from "typewriter-effect";
import HeroBgAnimation from "@animations/HeroBgAnimation";
import { motion } from "framer-motion";
import StarsCanvas from "@canvas/Stars";
import shyam from "@photos/shyam.png"
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


export interface BioProps {
  name: string;
  roles: string[];
  description: string;
  github:string;
  resume: string;
  linkedin:string,
  twitter: string,
  insta: string,
  facebook: string,
}


const bioData: BioProps = {
  name: Bio.name,
  roles: Bio.roles,
  description: Bio.description,
  github: Bio.github,
  resume: Bio.resume,
  linkedin: Bio.linkedin,
  twitter: Bio.twitter,
  insta: Bio.insta,
  facebook: Bio.facebook,
};

const HeroSection: React.FC = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <StarsCanvas /> 
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  Hi, I&apos;m <br /> {bioData.name}
                </Title>
              </motion.div>
              <TextLoop>
                I am a
                <Span>
                  <Typewriter
                    options={{
                      strings: bioData.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>
              <motion.div {...headContentAnimation}>
                <SubTitle>{bioData.description}</SubTitle>
              </motion.div>
              <ResumeButton href={bioData.resume} target="_blank">Check Resume</ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <Img
                  src={shyam}
                  width={500}
                  height={700}
                  alt={bioData.name}
                />
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
