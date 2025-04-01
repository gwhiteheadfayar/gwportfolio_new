// src/components/Content.js
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ProjectsList from "./ProjectsList";
import AboutMe from "./AboutMe";
import HomeInfo from "./HomeInfo";
import Resume from "./Resume";

const ContentContainer = styled.div`
  padding: 1.25rem;
  color: white; /* White text to be visible on colored background */
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  position: relative;
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0rem;
  line-height: 2.5rem;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  font-size: 3rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
`;

const SectionDetails = styled.p`
  margin-top: 0;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5;
  opacity: 1;

`;

const Content = ({ section }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [typingComplete, setTypingComplete] = useState(false);

    useEffect(() => {
        if (!section) return;

        // Reset text and typing state
        setDisplayedText("");
        setTypingComplete(false);

        // Typewriter effect
        let i = 0;
        const text = section.content;
        const interval = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                setTypingComplete(true);
            }
        }, 20);

        return () => clearInterval(interval);
    }, [section]);

    if (!section) return null;

    return (
        <ContentContainer>
            <SectionTitle>{section.title}</SectionTitle>
            <SectionDetails>{displayedText}</SectionDetails>

            {/* Conditionally render components based on section ID and typing completion */}
            {section.id === "projects" && <ProjectsList />}
            {section.id === "about" && <AboutMe />}
            {section.id === "Home" && <HomeInfo />}
            {section.id === "resume" && <Resume />}
        </ContentContainer>
    );
};

export default Content;