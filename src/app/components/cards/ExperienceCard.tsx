"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "@components/sections/ExperienceSection";
import {
  Top,
  Image,
  Body,
  Company,
  Role,
  Date,
  Description,
  Skills,
  Span,
  Skill,
  ItemWrapper,
} from "@styles/cards/ExperienceCardStyle";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      date={experience.date}
      icon={
        <img
          width="100%"
          height="100%"
          src={experience.img}
          alt={experience.company}
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
        <Image src={experience?.img} alt={experience.company} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
              {experience?.skills?.map((skill, index) => (
                <Skill key={`skills-${index}`}>{skill}</Skill>
              ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
