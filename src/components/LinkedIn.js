// src/components/LinkedIn.js
import React from "react";
import styled from "styled-components";

const LinkedInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #0077B5; // LinkedIn brand color
  border-radius: 8px;
  color: white;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  cursor: pointer;
`;

const LinkedInIcon = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const IconImage = styled.img`
  width: 6rem;
  height: 2rem;
  object-fit: contain;
  margin-right: 1rem;
`;

const LinkedInText = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

const LinkedIn = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/garrett-whitehead/", "_blank");
  };

  return (
    <LinkedInContainer onClick={handleClick}>
      <LinkedInIcon>
        <IconImage src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn Icon" />
        <LinkedInText>Connect with me on LinkedIn!</LinkedInText>
      </LinkedInIcon>
    </LinkedInContainer>
  );
};

export default LinkedIn;

