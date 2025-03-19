"use client";

import { education } from "@constants/constants";
import EducationCard from "@components/cards/EducationCard";
import {
  Description,
  Wrapper,
  Title,
  Container,
} from "@styles/sections/EducationSectionStyle";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EarthCanvas from "@canvas/Earth";

// Define education Type
export interface Education {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  logo: string;
}

const EducationSection: React.FC = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Description>
          My education has been a journey of self-discovery of educational
          details are as follows.
        </Description>

        <VerticalTimeline>
          {education.map((educations, index) => (
            <EducationCard key={`educations-${index}`} education={educations} />
          ))}
        </VerticalTimeline>
        <EarthCanvas />
      </Wrapper>
    </Container>
  );
};

export default EducationSection;
