import React from "react";
import styled from "styled-components"; // [cite: 16]
import LastFmScrobbles from "./LastFmScrobbles";

const AboutContainer = styled.div`
  margin-top: 1.25rem;
  max-height: 65vh; /* Set maximum height to prevent overflow */
  overflow-y: auto; /* Enable vertical scrolling if content exceeds max-height */
  
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
  
  /* Add some padding for the scrollbar */
  padding-right: 0.5rem;
`;

const AboutCard = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 0rem;
  padding: 0rem;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  color: rgb(0, 0, 0);
`;

const AboutText = styled.p`
  text-align: left;
  padding: 0.5rem 0.5rem;
  margin: 0;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const ExperienceCard = styled(AboutCard)`
  display: flex;
  flex-direction: column;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  padding: 0.5rem 0.5rem 0.5rem;
  align-self: center;
`;

const SkillIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.1);
  }
`;


const AboutMe = ({ aboutContent, skills, experiences, showLastFm = true }) => { // Added showLastFm prop
  return (
    <AboutContainer>

      <SectionTitle>Experience</SectionTitle>
      <ExperienceCard>
        <AboutText>
          I have more than 3 years of combined industry experience in software engineering at J.B. Hunt (Lowell, AR) and Ozark Apps (Fayetteville, AR).
          <br />I have worked on various projects, including web and mobile applications, utilizing a range of technologies and frameworks.
          <br /> Most of my work has been in the React and React Native ecosystem, but I have also worked with Swift and Kotlin for mobile development.
          <br /> I have experience with Firebase, Firestore, and other cloud services for backend development.
          <br /><br />Proficient in React, React Native, Firebase, Python, Java, and more.
        </AboutText>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillIcon key={index} src={skill.icon} alt={skill.name} />
          ))}
        </SkillsContainer>
      </ExperienceCard>

      {showLastFm && <LastFmScrobbles />}
    </AboutContainer>
  );
};
export default AboutMe;