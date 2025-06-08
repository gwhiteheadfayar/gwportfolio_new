import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionItem = styled.div`
  border-bottom: 1px solid #e5e7eb;
`;

const AccordionHeader = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  font-family: "Inter", sans-serif;
`;

const AccordionContent = styled.div`
  padding: 0 1rem 1rem 1rem;
  line-height: 1.6;
  color: #374151;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  background-color: #111827;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #374151;
  }
`;

const ProjectsListShadcn = ({ projects }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {projects.map((project, index) => (
                <AccordionItem key={index}>
                    <AccordionHeader onClick={() => handleToggle(index)}>
                        {project.name}
                        <span>{openIndex === index ? '-' : '+'}</span>
                    </AccordionHeader>
                    {openIndex === index && (
                        <AccordionContent>
                            <p>{project.description}</p>
                            <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
                                View Project
                            </ProjectLink>
                        </AccordionContent>
                    )}
                </AccordionItem>
            ))}
        </div>
    );
};

export default ProjectsListShadcn;