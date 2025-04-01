// src/components/Header.js
import React, { useState } from "react";
import styled, { css } from "styled-components";
import gw_mta_logo from "../assets/gw_logo_small.png";

const HeaderContainer = styled.div`
  background-color: #C60C30;
  color: white;
  padding: 1rem 0.2rem 0.6rem 1rem;
  line-height: 1rem;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 35px;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  display: flex;
  justify-content: space-between;
`;

const LeftAligned = styled.div`
  display: flex;
  align-items: center;
`;

const NoButtonStyle = styled.button`
  color: ${(props) => (props.clicked ? "rgba(255, 255, 255, 0.8)" : "white")};
  transform: ${(props) => (props.clicked ? "translateY(0.1rem)" : "none")};
  padding: 1rem 0.2rem 0.6rem 1rem;
  line-height: 1rem;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 35px;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
  ${(props) =>
    props.invert &&
    css`
      filter: invert(100%);
    `};
  padding-right: 0.5rem;
  margin-top: -0.5rem;
`;

const Header = ({ currentPath }) => {
  const [emailClicked, setEmailClicked] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("glwhiteh@uark.edu");
    setEmailClicked(true);
  };

  return (
    <HeaderContainer>
      <LeftAligned>
        <NoButtonStyle onClick={handleEmailClick} clicked={emailClicked}>
          glwhiteh@uark.edu{"  "}
        </NoButtonStyle>
        <text> /{currentPath || "Home"}</text>
      </LeftAligned>
      <Image src={gw_mta_logo} alt="Garrett Whitehead's MTA logo" invert align="right" />
    </HeaderContainer>
  );
};

export default Header;

