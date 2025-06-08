import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// --- STYLES ---

const HeaderContainer = styled.header`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb; /* shadcn-style subtle border */
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter", sans-serif;
`;

const EmailContainer = styled(motion.div)`
  display: flex; /* This allows child spans to be laid out next to each other */
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
  cursor: pointer;
`;

const PathText = styled.p`
  font-size: 1rem;
  color: #6b7280; /* Muted text color for secondary info */
  margin: 0;
`;

// --- ANIMATION VARIANTS ---

// Parent container variant to orchestrate the animation of its children
const containerVariants = {
    hover: {
        transition: {
            staggerChildren: 0.03, // Each letter will animate 0.03s after the previous one
        },
    },
};

// Child (letter) variant to define the actual animation
const letterVariants = {
    hover: {
        y: [0, -4, 0], // Move up and then back down
        transition: {
            duration: 0.4,
            ease: "easeInOut",
        },
    },
};

// --- COMPONENT ---

const HeaderShadcn = ({ email, currentPath }) => {
    const handleEmailClick = () => {
        navigator.clipboard.writeText(email);
        // You could add a subtle confirmation tooltip here if desired
    };

    return (
        <HeaderContainer>
            <EmailContainer
                onClick={handleEmailClick}
                variants={containerVariants}
                whileHover="hover" // Trigger the 'hover' variant on mouse over
            >
                {email.split('').map((char, index) => (
                    <motion.span
                        key={`${char}-${index}`}
                        variants={letterVariants}
                        style={{ position: 'relative' }} // Needed for y-transform
                    >
                        {char}
                    </motion.span>
                ))}
            </EmailContainer>

            <PathText>/Modern</PathText>
        </HeaderContainer>
    );
};

export default HeaderShadcn;