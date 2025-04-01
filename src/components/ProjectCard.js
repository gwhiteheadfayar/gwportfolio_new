// src/components/ProjectCard.js
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: rgba(0, 0, 0, 1);
  border-radius: 4px;
  padding: 0.8rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 10rem;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;
  line-height: 1rem;
`;

const ProjectCard = ({ project, onClick }) => {
    return (
        <CardContainer onClick={() => onClick(project)}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
        </CardContainer>
    );
};

export default ProjectCard;