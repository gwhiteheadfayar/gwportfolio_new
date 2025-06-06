import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 20px;
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
  background-color:rgb(255, 255, 255);
  color: #333;
`;

const MinimalistLayout = ({ siteData }) => {
    const [copied, setCopied] = useState(false);
    const handleCopyClick = () => {
        navigator.clipboard.writeText(siteData.personalInfo.email);
        setCopied(true);
    };

    return (
        <PageContainer>
            <h1>{siteData.personalInfo.name}</h1>
            <p>
                Email: 
                <span style={{cursor: copied ? 'pointer' : 'pointer'}} onClick={handleCopyClick}>
                    {siteData.personalInfo.email}
                    {copied ? <span> (copied)</span> : null}
                </span>
            </p>
            <p>Social links:</p>
            <ul>
                {siteData.socialLinks.map(link => <li><a href={link.url}>{link.name}</a></li>)}
            </ul>
            <h2>About Me</h2>
            <p>{siteData.aboutMeContent.introduction}</p>
            <p>I have a passion for {siteData.skills.map(skill => skill.name).join(", ")}</p>
            <h2>Projects</h2>
            <ul>
                {siteData.projects.map(project => <li><a href={project.url}>{project.name}</a></li>)}
            </ul>
            <h2>Experience</h2>
            <ul>
                {siteData.experiences.map(experience => <li>
                    <a href={experience.url}>{experience.company}</a> - {experience.duration}
                    <p style={{marginLeft: '1rem'}}>{experience.description}</p>
                </li>)}
            </ul>
        </PageContainer>
    );
};
export default MinimalistLayout;

