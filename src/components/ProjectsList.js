// src/components/ProjectsList.js
import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsContainer = styled.div`
  margin-top: 2rem;
  max-height: 38rem;
  overflow-y: auto;
  padding-right: 1rem;
  
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
`;

const ProjectItem = styled.div`
  margin-bottom: 0.75rem;
  border-top: 1rem solid rgb(0, 0, 0);
  background-color: rgb(0, 0, 0);
  border-radius: 0rem;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgb(26, 26, 26);
  }
  
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  color: white;
  font-weight: 600;
  font-size: 2rem;
  user-select: none;
`;

const ArrowIcon = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
  }
`;

const ProjectDetails = styled(motion.div)`
  padding: 0 1rem 0 3.5rem;
  color: rgb(255, 255, 255);
  font-size: 1rem;
  line-height: 1.5;
`;

const ProjectLink = styled.button`
  font-weight: bold;
  margin: 0;
  padding: 0.2rem 0.2rem 2.5rem 0.2rem;
  background-color: #00A1DE;
  color: white;
  border: none;
  cursor: pointer;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 2rem;
  text-align: left;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #00A1DE90;
  }
`;

const ProjectsList = ({ projects }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleToggleExpand = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  const handleOpenLink = (e, project) => {
    e.stopPropagation();
    if (project.openResume) {
      window.open(`${process.env.PUBLIC_URL}/Garrett_Whitehead_Resume.pdf`, '_blank');
    } else {
      window.open(project.url, '_blank');
    }
  };

  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <ProjectItem key={index} onClick={() => handleToggleExpand(index)}>
          <div style={{ borderTop: "0.15rem solid white", width: "100%", margin: "0 auto" }} />
          <ProjectHeader>
            <ArrowIcon
              animate={{ rotate: expandedProject === index ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={`${process.env.PUBLIC_URL}/mta-arrow.ico`} alt="MTA Arrow" />
            </ArrowIcon>
            {project.name}
          </ProjectHeader>

          <AnimatePresence>
            {expandedProject === index && (
              <ProjectDetails
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ borderTop: "0.1rem solid white", width: "100%", margin: "0 auto" }} />
                <p>{project.description}</p>
                <ProjectLink onClick={(e) => handleOpenLink(e, project)}>
                  Link
                </ProjectLink>
              </ProjectDetails>
            )}
          </AnimatePresence>
        </ProjectItem>
      ))}
    </ProjectsContainer>
  );
};

export default ProjectsList;