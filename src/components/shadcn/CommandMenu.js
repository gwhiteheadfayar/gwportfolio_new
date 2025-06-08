import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// 1. UPDATE: Use flexbox on the backdrop for robust centering
const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1999;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Aligns the menu to the top portion */
  padding-top: 15vh; /* Push menu down from the top */
`;

// 2. UPDATE: Remove positioning logic, as the backdrop now handles it
const MenuContainer = styled(motion.div)`
  width: 90%;
  max-width: 500px;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const HintText = styled.p`
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
  padding: 0.5rem;
`;

const MenuList = styled.div`
  padding: 0.5rem;
`;

// 3. UPDATE: MenuItem is now a link tag and uses flexbox
const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  text-decoration: none;
  color: #111827;
  border-radius: 0.375rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

// 4. NEW: Icon styled component
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;


const CommandMenu = ({ socialLinks }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(!isOpen);
            } else if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <>
            <HintText>Press <kbd>⌘+K</kbd> to open social navigation</HintText>
            <AnimatePresence>
                {isOpen && (
                    <Backdrop
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <MenuContainer
                            initial={{ scale: 0.95, y: -20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: -20, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing the menu
                        >
                            <MenuList>
                                {/* 5. UPDATE: Map over links to render item with icon */}
                                {socialLinks.map(link => (
                                    <MenuItemLink href={link.url} key={link.name} target="_blank" rel="noopener noreferrer">
                                        <Icon
                                            src={link.icon}
                                            alt={`${link.name} icon`}
                                            style={link.invertIcon ? { filter: 'invert(1)' } : {}}
                                        />
                                        {link.name}
                                    </MenuItemLink>
                                ))}
                            </MenuList>
                        </MenuContainer>
                    </Backdrop>
                )}
            </AnimatePresence>
        </>
    );
};

export default CommandMenu;