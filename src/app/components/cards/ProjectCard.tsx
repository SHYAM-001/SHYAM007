"use client";

import { Project } from "@components/sections/ProjectSection";
import Image from "next/image";
import {
  Card,
  Tags,
  Details,
  Title,
  Date,
  Description,
  Members,
  ImageSection,
  Avatar,
  Button,
} from "@styles/cards/ProjectCardStyle";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <ImageSection>
        <Image
          src={project.image}
          alt={project.title}
          layout="fill" 
          objectFit="cover" 
          style={{
            backgroundColor: `${({ theme }) => theme.white}`,
            borderRadius: "10px",
            boxShadow: "0 0 16px 2px rgba(0, 0, 0, 0.3)",
          }}
        />
      </ImageSection>
      {/* {project.tags.map((tag, index_t) => (
        <Tags key={`tag-${index_t}`}>{tag}</Tags>
      ))} */}
      <Tags></Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member, index_m) => (
          <Avatar key={`member-${index_m}`} alt={member.name} width={34} height={34} src={member.img} />
        ))}
      </Members>
      <Button href={project.github} target="_blank">
        view code
      </Button>
    </Card>
  );
};

export default ProjectCard;
