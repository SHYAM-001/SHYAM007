"use client";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "@components/sections/ExperienceSection";
import Image from "next/image";
import {
  Top,
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
        <Image
          src={experience.img}
          alt={experience.company}
          width={50}
          height={50}
          style={{
            borderRadius: "50px",
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
        <Image
          src={experience.img}
          alt={experience.company}
          width={100}
          height={100}
          style={{
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <Body>
          <Role>{experience.role}</Role>
          <Company href={experience?.website} target="_blank">{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience.desc && <Span>{experience.desc}</Span>}
        {experience.skills.length > 0 && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
              <ItemWrapper>
                {experience.skills.map((skill, index) => (
                  <Skill key={index}>{skill}{index === experience.skills.length - 1 ? "." : ","}</Skill>
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
