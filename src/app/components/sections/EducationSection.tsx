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

export interface Education {
  id : number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

const educationData: Education[] = education;

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
          {educationData.map((educations, index) => (
            <EducationCard key={`educations-${index}`} education={educations} />
          ))}
        </VerticalTimeline>
        <EarthCanvas />
      </Wrapper>
    </Container>
  );
};

export default EducationSection;
