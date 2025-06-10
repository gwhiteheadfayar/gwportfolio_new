import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { UserIcon, BriefcaseIcon, CodeIcon, EnvelopeIcon } from '@phosphor-icons/react';

const BACKGROUNDS = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e'
].map(url => `${url}?auto=format&fit=crop&w=1920&q=80`);

const BUTTONS = [
    {
        id: 'about',
        title: 'About Me',
        icon: <UserIcon size={32} weight="fill" />,
        content: `My name is Garrett Whitehead. I'm a graduate from the University of Arkansas with a Bachelor's of Science in Computer Science. I like movies, music, games, architecture, design, and programming.`
    },
    {
        id: 'experience',
        title: 'Experience',
        icon: <BriefcaseIcon size={32} weight="fill" />,
        content: 'I have more than 3 years of combined industry experience in software engineering at J.B. Hunt and Ozark Apps.'
    },
    {
        id: 'projects',
        title: 'Projects',
        icon: <CodeIcon size={32} weight="fill" />,
        content: 'A collection of my projects that I\'ve built in my free time.'
    },
    {
        id: 'contact',
        title: 'Contact',
        icon: <EnvelopeIcon size={32} weight="fill" />,
        content: 'Connect with me on LinkedIn, or any of my socials!'
    }
];

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: "Inter", sans-serif;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const NameHeader = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Blurb = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 80%;
  line-height: 1.5;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 20rem;
`;

const ButtonWrapper = styled(motion.div).attrs(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { type: 'spring', damping: 20, stiffness: 300 }
}))`
  position: relative;
  display: flex;
  font-weight: 600;
  overflow: hidden;
  color: white;
  cursor: pointer;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 80%;
  max-width: 400px;
`;

const ButtonEffect = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3),
              inset -1px -1px 1px 1px rgba(255, 255, 255, 0.3);
`;

const ButtonContent = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2.5rem;
  z-index: 3;
  color: white;
  width: 100%;
  justify-content: center;
`;

const ButtonTitle = styled.span`
  font-size: 1.rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
`;

const DraggableHeader = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  cursor: move;
  z-index: 20;
`;

const CustomScrollbar = styled.div`
  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 1rem;
    border: 0.125rem solid rgba(255, 255, 255, 0.2);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const ExpandedContent = styled(motion.div).attrs(() => ({
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    transition: { type: 'spring', damping: 20, stiffness: 200 }
}))`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  max-height: 80vh;
  backdrop-filter: blur(10px);
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 2rem;
  z-index: 10;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
`;

const CloseButton = styled(motion.button).attrs(() => ({
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 }
}))`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 25;
  color: white;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
`;

const ContentWrapper = styled(CustomScrollbar)`
  margin-top: 40px;
  overflow-y: auto;
  padding: 1rem;
  height: calc(100% - 40px);
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
`;

const ContentTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 0 5px rgba(0,0,0,0.5);
`;

const ContentText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: white;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #aad1ff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s;
  display: block;
  margin-bottom: 0.5rem;

  &:hover {
    color: #7fb9ff;
    text-decoration: underline;
  }
`;

const LiquidGlassLayout = ({ siteData }) => {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const [expandedButton, setExpandedButton] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    //cycle background pics
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex(prev => (prev + 1) % BACKGROUNDS.length);
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = (id) => {
        setExpandedButton(expandedButton === id ? null : id);
        setPosition({ x: 0, y: 0 }); //reset position when opened
    };

    const handleDragStart = (e, info) => {
        setIsDragging(true);
    };

    const handleDrag = (e, info) => {
        setPosition({
            x: position.x + info.delta.x,
            y: position.y + info.delta.y
        });
    };

    const handleDragEnd = (e, info) => {
        setIsDragging(false);
    };

    return (
        <LayoutContainer>
            <BackgroundContainer>
                <AnimatePresence mode='wait'>
                    <BackgroundImage
                        key={currentBgIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        style={{ backgroundImage: `url(${BACKGROUNDS[currentBgIndex]})` }}
                    />
                </AnimatePresence>
            </BackgroundContainer>

            <ContentContainer>
                <LeftPanel>
                    <NameHeader
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {siteData.personalInfo.name}
                    </NameHeader>
                    <Blurb
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Software Developer with a passion for creating beautiful, functional experiences.
                    </Blurb>
                </LeftPanel>

                <RightPanel>
                    <ButtonsContainer>
                        {BUTTONS.map((button) => (
                            <ButtonWrapper
                                key={button.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleButtonClick(button.id)}
                            >
                                <ButtonEffect />
                                <ButtonContent>
                                    {React.cloneElement(button.icon, { color: "white" })}
                                    <ButtonTitle>{button.title}</ButtonTitle>
                                </ButtonContent>
                            </ButtonWrapper>
                        ))}
                    </ButtonsContainer>
                </RightPanel>
            </ContentContainer>

            <AnimatePresence>
                {expandedButton && (
                    <ExpandedContent
                        style={{
                            x: position.x,
                            y: position.y
                        }}
                        drag={isDragging ? false : true}
                        dragConstraints={{
                            top: -window.innerHeight / 2,
                            bottom: window.innerHeight / 2,
                            left: -window.innerWidth / 2,
                            right: window.innerWidth / 2
                        }}
                        layoutId={`expanded-${expandedButton}`}
                    >
                        <DraggableHeader
                            drag
                            onDragStart={handleDragStart}
                            onDrag={handleDrag}
                            onDragEnd={handleDragEnd}
                            dragConstraints={{
                                top: -window.innerHeight / 2,
                                bottom: window.innerHeight / 2,
                                left: -window.innerWidth / 2,
                                right: window.innerWidth / 2
                            }}
                        />
                        <CloseButton
                            onClick={() => setExpandedButton(null)}
                        >
                            ✕
                        </CloseButton>

                        <ContentWrapper>
                            {(() => {
                                const button = BUTTONS.find(b => b.id === expandedButton);
                                return (
                                    <>
                                        <ContentTitle>{button.title}</ContentTitle>
                                        <ContentText>{button.content}</ContentText>

                                        {expandedButton === 'projects' && (
                                            <ProjectList>
                                                {siteData.projects.map(project => (
                                                    <ProjectItem key={project.name}>
                                                        <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
                                                            {project.name}
                                                        </ProjectLink>
                                                        <ContentText>{project.description}</ContentText>
                                                    </ProjectItem>
                                                ))}
                                            </ProjectList>
                                        )}

                                        {expandedButton === 'contact' && (
                                            <div>
                                                {siteData.socialLinks.map(link => (
                                                    <ProjectLink
                                                        key={link.name}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ display: 'block', margin: '1rem 0' }}
                                                    >
                                                        {link.name}
                                                    </ProjectLink>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                );
                            })()}
                        </ContentWrapper>
                    </ExpandedContent>
                )}
            </AnimatePresence>

            {/* SVG filter for liquid glass effect */}
            <svg style={{ display: 'none' }}>
                <filter
                    id="glass-distortion"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    filterUnits="objectBoundingBox"
                >
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.001 0.005"
                        numOctaves="1"
                        seed="5"
                        result="turbulence"
                    />
                    <feComponentTransfer in="turbulence" result="mapped">
                        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
                    </feComponentTransfer>
                    <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
                    <feSpecularLighting
                        in="softMap"
                        surfaceScale="5"
                        specularConstant="1"
                        specularExponent="100"
                        lighting-color="white"
                        result="specLight"
                    >
                        <fePointLight x="-200" y="-200" z="300" />
                    </feSpecularLighting>
                    <feComposite
                        in="specLight"
                        operator="arithmetic"
                        k1="0"
                        k2="1"
                        k3="1"
                        k4="0"
                        result="litImage"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="softMap"
                        scale="150"
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </svg>
        </LayoutContainer>
    );
};

export default LiquidGlassLayout;