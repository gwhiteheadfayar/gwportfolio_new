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

const HomeInfo = () => {
  return (
    <SocialIconContainer>
      <a href="https://instagram.com/garrettlwhitehead/" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/240px-Instagram_icon.png" alt="Instagram" />
      </a>
      <a href="https://github.com/gwhiteheadfayar/" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/240px-Octicons-mark-github.svg.png" alt="GitHub" style={{ filter: "invert(100%)" }} />
      </a>
      <a href="https://www.linkedin.com/in/garrett-whitehead/" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/240px-LinkedIn_logo_initials.png" alt="LinkedIn" />
      </a>
      <a href="https://open.spotify.com/user/garrettwspotify/" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/232px-Spotify_icon.svg.png" alt="Spotify" />
      </a>
      <a href="https://letterboxd.com/webapi/" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Letterboxd_2023_logo.png/240px-Letterboxd_2023_logo.png" alt="Letterboxd" />
      </a>
    </SocialIconContainer>
  );
};

export default HomeInfo;
