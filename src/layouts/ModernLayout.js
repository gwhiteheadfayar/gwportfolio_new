import React, { useState } from "react";
import Header from "../components/Header";
import Dots from "../components/Dots";
import Content from "../components/Content";
import SubwaySimulation from "../components/subwaySimulation";

// Import the styled components from the new file
import {
    AppContainer,
    TopSection,
    BottomSection,
    LeftSection,
    RightSection,
    NameHeader,
} from './ModernLayout.styles';
import { section } from "framer-motion/client";

const ModernLayout = ({ siteData }) => {
    const initialSection = siteData.navigationSections.find(s => s.id === "home") || siteData.navigationSections[0];
    const [activeSection, setActiveSection] = useState(initialSection);
    const [currentPath, setCurrentPath] = useState(initialSection.title);
    console.log(`section`, activeSection);

    const handleSelect = (section) => {
        setActiveSection(section);
        setCurrentPath(section.title);
    };

    const activeSectionData = {
        ...activeSection,
        content: siteData.sectionIntros[activeSection.id.toLowerCase()] || activeSection.content,
    };

    return (
        <AppContainer>
            <TopSection>
                <Header currentPath={currentPath} email={siteData.personalInfo.email} />
            </TopSection>
            <BottomSection>
                <LeftSection bgColor={activeSection?.color}>
                    <NameHeader>{siteData.personalInfo.name}</NameHeader>
                    <Dots
                        sections={siteData.navigationSections}
                        onSelect={handleSelect}
                        activeSection={activeSection?.id}
                    />
                    <Content section={activeSectionData} allSiteData={siteData} />
                </LeftSection>
                <RightSection bgColor={activeSection?.color}>
                    <SubwaySimulation />
                </RightSection>
            </BottomSection>
        </AppContainer>
    );
};

export default ModernLayout;