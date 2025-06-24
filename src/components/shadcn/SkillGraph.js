import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GraphContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BarRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  align-items: center;
`;

const SkillLabel = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  text-align: right;
  margin: 0;
`;

const BarBackground = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f3f4f6;
  border-radius: 4px;
  overflow: hidden;
`;

const BarFill = styled(motion.div)`
  height: 100%;
  background-color: #111827;
  border-radius: 4px;
`;

// Animation variant for the parent container
const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1, // Each bar will animate 0.1s after the previous
        },
    },
};

const SkillGraph = ({ skills }) => {
    return (
        <GraphContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // Animate when the component scrolls into view
            viewport={{ once: true, amount: 0.8 }}
        >
            {skills.map((skill) => (
                <BarRow key={skill.name}>
                    <SkillLabel>{skill.name}</SkillLabel>
                    <BarBackground>
                        <BarFill
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        />
                    </BarBackground>
                </BarRow>
            ))}
        </GraphContainer>
    );
};

export default SkillGraph;