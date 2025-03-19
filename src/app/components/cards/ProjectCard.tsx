"use client";

import {
  Card,
  Image,
  Tags,
  Details,
  Title,
  Date,
  Description,
  Members,
  Avatar,
  Button,
} from "@styles/cards/ProjectCardStyle";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
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
          <Avatar key={`member-${index_m}`} src={member.img} />
        ))}
      </Members>
      <Button href={project.github} target="_blank">
        view code
      </Button>
    </Card>
  );
};

export default ProjectCard;
