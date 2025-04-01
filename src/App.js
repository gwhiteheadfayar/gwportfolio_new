import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Dots from "./components/Dots";
import Content from "./components/Content";
import SubwaySimulation from "./components/subwaySimulation";
import sections from "./data";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const TopSection = styled.div`
  flex: 0 0 auto; // Take minimum space for header
`;

const BottomSection = styled.div`
  flex: 1; // Take remaining space
  display: flex;
  flex-direction: row; // Default to row for wide screens
  overflow: hidden;

  // Media query for narrow screens (e.g., mobile)
  @media (max-width: 900px) {
    flex-direction: column; // Stack vertically on narrow screens
  }
`;

const LeftSection = styled.div`
  flex: 1; // Take remaining space
  width: 75%; // 75% width on wide screens
  background-color: ${(props) => props.bgColor || "#000000"};
  transition: background-color 0.5s ease;
  overflow: hidden;

  // Media query for narrow screens
  @media (max-width: 900px) {
    width: 100%; // Full width on narrow screens
    height: 75vh; // 75% height on narrow screens
  }
`;

const RightSection = styled.div`
  width: 25%; // 25% width on wide screens
  background-color: ${(props) => props.bgColor || "#000000"};
  display: flex;
  overflow: hidden;

  // Media query for narrow screens
  @media (max-width: 900px) {
    width: 100%; // Full width on narrow screens
    height: 25vh; // 25% height on narrow screens
  }
`;

const NameHeader = styled.h1`
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 60px;
  font-weight: 800;
  margin-top: 16px;
  margin-bottom: 0;
  margin-left: 0.5rem;
  text-align: left;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
`;

const App = () => {
  const [activeSection, setActiveSection] = useState(sections.find(section => section.id === "Home"));
  const [currentPath, setCurrentPath] = useState();

  const handleSelect = (section) => {
    setActiveSection(section);
    setCurrentPath(section.title);
    console.log('active section: ', activeSection);
    console.log('current path: ', currentPath);
  };

  return (
    <AppContainer>
      <TopSection>
        <Header currentPath={currentPath} />
      </TopSection>
      <BottomSection>
        <LeftSection bgColor={activeSection?.color}>
          <NameHeader>Garrett Whitehead</NameHeader>
          <Dots onSelect={handleSelect} activeSection={activeSection?.id} />
          <Content section={activeSection} />
        </LeftSection>
        <RightSection bgColor={activeSection?.color}>
          <SubwaySimulation />
        </RightSection>
      </BottomSection>
    </AppContainer>
  );
};

export default App;



