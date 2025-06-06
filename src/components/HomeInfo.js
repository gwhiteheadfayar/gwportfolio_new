// src/components/ProjectsList.js
import React from "react";
import styled from "styled-components";

const SocialIconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem; /* Adding horizontal spacing between each social icon */
`;

const SocialIcon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: rotate(-10deg) scale(1.2);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }
`;

const HomeInfo = ({ socialLinks }) => {
  return (
    <SocialIconContainer>
      {socialLinks.map((social) => (
        <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
          <SocialIcon
            src={social.icon}
            alt={social.name}
            //apply filter style based on data
            style={social.invertIcon ? { filter: "invert(100%)" } : {}}
          />
        </a>
      ))}
    </SocialIconContainer>
  );
};

export default HomeInfo;
