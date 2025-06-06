// src/components/Experience.js
import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CompanyLogo = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: contain;
  margin-right: 1rem;
`;

const CompanyDescription = styled.div`
  font-size: 1.25rem;
`;

const Experience = ({ experiences }) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <ExperienceContainer>
      {experiences.map((exp) => (
        <CompanyContainer key={exp.company} onClick={() => handleClick(exp.url)}>
          <CompanyLogo src={exp.logo} alt={`${exp.company} Logo`} />
          <CompanyDescription>
            <b>{exp.company}</b> ({exp.duration})<br />
            {exp.description}
          </CompanyDescription>
        </CompanyContainer>
      ))}
    </ExperienceContainer>
  );
};

export default Experience;

