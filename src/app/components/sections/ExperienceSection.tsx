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

// Define Experience Type
export interface Experience {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  logo: string;
}

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
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default ExperienceSection;
