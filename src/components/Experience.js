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

const Experience = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <ExperienceContainer>
      <CompanyContainer onClick={() => handleClick("https://www.jbhunt.com")}>
              <CompanyLogo src="https://upload.wikimedia.org/wikipedia/de/f/f3/J.B.-Hunt-Logo.svg" alt="J.B. Hunt Logo" />
        <CompanyDescription>
          <b>J.B. Hunt</b> (Mar 2019 - Aug 2021)<br />
          Worked on multiple projects, including a web application for tracking shipments and a mobile app for drivers.
        </CompanyDescription>
      </CompanyContainer>
      <CompanyContainer onClick={() => handleClick("https://ozarkapps.com")}>
        <CompanyLogo src="https://ozarkapps.com/logo.png" alt="Ozark Apps Logo" />
        <CompanyDescription>
          <b>Ozark Apps</b> (Oct 2024 - Current)<br />
          Worked on multiple applications for various clients using React, React Native, Swift, and Firebase.
        </CompanyDescription>
      </CompanyContainer>
    </ExperienceContainer>
  );
};

export default Experience;

