"use client";

import { skills } from "@constants/constants";
import Tilt from "react-parallax-tilt";
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
  SkillImg,
} from "@/app/styles/sections/SkillSectionStyles";

const SkillSection = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Here are some of my skills on which I have been Wroked past 3 years.
        </Description>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <Skill key={`skill-${index}`}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      <SkillImg src={item.image}></SkillImg>
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
