// src/components/ThemeSwitcher.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// --- STYLES ---

const SwitcherContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const ToggleButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color:rgb(255, 255, 255);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: 0;
`;

// NEW: Header for the open menu
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0.5rem 0.25rem 1rem;
  border-bottom: 1px solid #f3f4f6;

  h4 {
    margin: 0;
    font-weight: 600;
    font-size: 1rem;
    color: #111827;
  }
`;

// NEW: Close button component
const CloseButton = styled.button`
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: #6b7280;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }
`;


const Menu = styled.div`
  padding: 0.5rem;
`;

const MenuItem = styled.button`
  display: block;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  color: #111827;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

// --- COMPONENT ---

const ThemeSwitcher = ({ themes }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleThemeSelect = (themeName) => {
        localStorage.setItem('selectedTheme', themeName);
        window.location.reload();
    };

    const containerVariants = {
        closed: {
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            transition: { duration: 0.4, ease: 'easeInOut' },
        },
        open: {
            width: '200px',
            height: 'auto',
            borderRadius: '12px',
            transition: { duration: 0.4, ease: 'easeInOut' },
        },
    };

    return (
        <SwitcherContainer
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={containerVariants}
        >
            {isOpen ? (
                // UPDATED: Content for the "open" state
                <>
                    <Header>
                        <h4>Pick a style!</h4>
                        <CloseButton onClick={() => setIsOpen(false)}>✕</CloseButton>
                    </Header>
                    <Menu>
                        {themes.map((theme) => (
                            <MenuItem key={theme} onClick={() => handleThemeSelect(theme)}>
                                {theme.charAt(0).toUpperCase() + theme.slice(1)}
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            ) : (
                // Content for the "closed" state
                <ToggleButton onClick={() => setIsOpen(true)}>
                    🎨
                </ToggleButton>
            )}
        </SwitcherContainer>
    );
};

export default ThemeSwitcher;