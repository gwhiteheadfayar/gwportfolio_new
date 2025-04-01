// src/components/ProjectsList.js
import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = styled.div`
  margin-top: 2rem;
  max-height: 38rem; /* Max height before scrolling begins */
  overflow-y: auto; /* Only scrolls when content exceeds max-height */
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 0.25rem;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  
  /* For Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
  
  /* Layout for project cards */
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding-right: 0.5rem; /* Space for scrollbar */
`;

const ProjectsList = () => {
  const projects = [
    {
      name: 'My Resume',
      description: 'Click here to find my formal resume!',
      url: './Garrett_Whitehead_Resume.pdf',
      openResume: true,
    },
    {
      name: 'Leave me a message!',
      description: 'Send me a doodle to let me know you\'ve been here!',
      url: 'https://doodlewall.netlify.app/',
      openResume: false,
    },
    {
      name: 'Custom-size NYT Connections Game',
      description: 'My take on the NYT game \'connections\', where users can make a custom size game board and share it with friends.',
      url: 'https://customsizeconnections.netlify.app/',
      openResume: false,
    },
    {
      name: 'Cover Collections',
      description: 'A site where you can view collections of book cover styles I found interesting.',
      url: 'https://github.com/gwhiteheadfayar/cover_collections',
      openResume: false,
    },
    {
      name: 'Chess.com Elo Protection Extension',
      description: 'A simple chrome extension that prevents you from quickly re-queueing a game on chess.com after a loss.',
      url: 'https://github.com/gwhiteheadfayar/extension-antiragequeue',
      openResume: false,
    },
    {
      name: 'Tsuro Board Game in Browser',
      description: 'Repository for my work in progress implementation of the game \'Tsuro\' as a react web app.',
      url: 'https://github.com/gwhiteheadfayar/orust',
      openResume: false,
    },
    {
      name: '2023 Uark Hackathon Project - SpoilScanner',
      description: 'My group\'s project for the 2023 Uark Hackathon. Managed fridge contents to notify users when spoilage was happening.',
      url: 'https://github.com/gwhiteheadfayar/SpoilScanner',
      openResume: false,
    },
  ];

  const handleProjectClick = (project) => {
    if (project.openResume) {
      window.open(`${process.env.PUBLIC_URL}/Garrett_Whitehead_Resume.pdf`, '_blank');
    } else {
      window.open(project.url, '_blank');
    }
  };

  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          onClick={handleProjectClick}
        />
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsList;