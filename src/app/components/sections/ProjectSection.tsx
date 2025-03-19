"use client";

import { useState } from "react";
import { projects } from "@constants/constants";
import {
  Description,
  Wrapper,
  Title,
  Container,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  CardContainer,
} from "@styles/sections/ProjectSectionStyle";
import ProjectCard from "../cards/ProjectCard";

export interface Project {
  /* title: string;
    company: string;
    date: string;
    location: string;
    description: string;
    logo: string; */
}

const ProjectSection: React.FC = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>
          I have worked on a wide range of projects. From working apps. Here are
          some of my projects.
        </Description>

        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            WEB APP&apos;S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "android app"}
            onClick={() => setToggle("android app")}
          >
            ANDROID APP&apos;S
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "machine learning"}
            onClick={() => setToggle("machine learning")}
          >
            MACHINE LEARNING
          </ToggleButton>
        </ToggleButtonGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default ProjectSection;
