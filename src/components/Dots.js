// src/components/Dots.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import sections from "../data";

const DotsContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 0.4rem 0 0 0.8rem;
`;

const Dot = styled(motion.div)`
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 2.2rem;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  overflow: hidden;
`;

const Dots = ({ onSelect, activeSection }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [displayedTexts, setDisplayedTexts] = useState(sections.map(section => section.label));

  // Update displayed texts when active section changes
  useEffect(() => {
    const newTexts = [...displayedTexts];
    sections.forEach((section, index) => {
      if (section.id === activeSection) {
        newTexts[index] = section.title;
      } else {
        newTexts[index] = section.label;
      }
    });
    setDisplayedTexts(newTexts);
  }, [activeSection]);

  const handleHoverStart = (index, section) => {
    setHoveredIndex(index);
    
    // Only animate if it's not the active section
    if (section.id !== activeSection) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedTexts(prevTexts => {
          const newTexts = [...prevTexts];
          newTexts[index] = section.title.substring(0, i + 1);
          return newTexts;
        });
        i++;
        if (i >= section.title.length) {
          clearInterval(interval);
        }
      }, 50);
    }
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  return (
    <DotsContainer>
      {sections.map((section, index) => (
        <Dot
          key={section.id}
          style={{ backgroundColor: section.color }}
          initial={{ width: 50 }}
          animate={{
            width: activeSection === section.id || hoveredIndex === index ? 120 : 50,
            x: 0,
            transition: { duration: 0.3 },
            fontSize: activeSection === section.id || hoveredIndex === index ? '1.25rem' : '2.25rem',
          }}
          onHoverStart={() => handleHoverStart(index, section)}
          onHoverEnd={handleHoverEnd}
          onClick={() => onSelect(section)}
        >
          {displayedTexts[index]}
        </Dot>
      ))}
    </DotsContainer>
  );
};

export default Dots;

