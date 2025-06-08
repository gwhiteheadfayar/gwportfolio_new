import React from 'react';
import styled from 'styled-components';

const ExperienceCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
`;

const Duration = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #374151;
  margin: 0;
  line-height: 1.6;
`;

const ExperienceShadcn = ({ experiences }) => {
    // Use a default logo if the real one fails to load
    const addDefaultSrc = (e) => {
        e.target.src = 'https://via.placeholder.com/48'; // A placeholder
    };

    return (
        <div>
            {experiences.map((exp) => (
                <ExperienceCard key={exp.company}>
                    <CardHeader>
                        <CompanyName>{exp.company}</CompanyName>
                        <Duration>{exp.duration}</Duration>
                    </CardHeader>
                    <Description>{exp.description}</Description>
                </ExperienceCard>
            ))}
        </div>
    );
};

export default ExperienceShadcn;