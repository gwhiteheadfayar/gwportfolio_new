import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const SkillBadge = styled.div`
  background-color: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const AboutMeShadcn = ({ aboutContent, skills }) => {
    return (
        <AboutContainer>
            <p>{aboutContent.introduction}</p>
            <p>{aboutContent.passion} {aboutContent.careerGoals}</p>
            <SkillsContainer>
                {skills.map((skill) => (
                    <SkillBadge key={skill.name}>{skill.name}</SkillBadge>
                ))}
            </SkillsContainer>
        </AboutContainer>
    );
};

export default AboutMeShadcn;