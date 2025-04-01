// src/components/Resume.js
import React from "react";
import styled from "styled-components";

const ResumeContainer = styled.div`
  margin-top: 1.25rem;
  height: 65vh; /* Set maximum height to prevent overflow */
  //overflow-y: auto; /* Enable vertical scrolling if content exceeds max-height */
  
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

const ResumeIframe = styled.embed`
  width: 100%;
  height: 100%;
  border: none;
`;

const Resume = () => {
    return (
        <ResumeContainer>
            <ResumeIframe src={`${process.env.PUBLIC_URL}/Garrett_Whitehead_Resume_2025.pdf`} type="application/pdf" width="100%" height="100%" />
        </ResumeContainer>
    );
};

export default Resume;