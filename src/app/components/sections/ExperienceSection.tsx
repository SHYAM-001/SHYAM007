"use client";

import { experiences } from "@constants/constants";
import ExperienceCard from "@components/cards/ExperienceCard";
import {
  Description,
  Wrapper,
  Title,
  Container,
} from "@styles/sections/ExperienceSectionStyle";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; 


export interface Experience {
  id: number;
  img: string;
  role: string;
  website?: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
  doc?: string; 
}


const experienceData: Experience[] = experiences;

const ExperienceSection: React.FC = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Description>
          My work experience as a software engineer, including companies and
          projects I have worked on.
        </Description>

        <VerticalTimeline>
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default ExperienceSection;
