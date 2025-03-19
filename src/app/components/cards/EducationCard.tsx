"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "@components/sections/ExperienceSection";
import {
  Top,
  Image,
  Body,
  School,
  Degree,
  Date,
  Description,
  Span,
  Grade,
} from "@styles/cards/EducationCardStyle";

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      date={education.date}
      icon={
        <img
          width="100%"
          height="100%"
          src={education.img}
          alt={education.school}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      }
      iconStyle={{
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px",
        backgroundColor: "rgba(17,25,40,0.83)",
        border: "1px solid rgba(255,255,255,0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255,255,255,0.3)",
      }}
    >
      <Top>
        <Image src={education?.img} alt={education.company} />
        <Body>
          <School>{education.school}</School>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>
        <b>Grade : </b>
        {education.grade}
      </Grade>
      <Description>
        {education?.desc && <Span>{education.desc}</Span>}
      </Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
