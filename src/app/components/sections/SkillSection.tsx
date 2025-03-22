"use client";

import { skills } from "@constants/constants";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import {
  Container,
  Wrapper,
  Title,
  Description,
  SkillsContainer,
  Skill,
  SkillTitle,
  SkillList,
  SkillItem,
} from "@/app/styles/sections/SkillSectionStyles";

interface SkillCategory {
  name: string;
  image: string;
}
interface SkillProps {
  title: string;
  skills: SkillCategory[];
}

const SkillData: SkillProps[] = skills;


const SkillSection: React.FC =  () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Here are some of my skills on which I have been Wroked past 1 years.
        </Description>

        <SkillsContainer>
          {SkillData.map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <Skill key={`skill-${index}`}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      <Image src={item.image} alt={item.name} width={24} height={24} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default SkillSection;
