import React from 'react';
import {
    PageContainer,
    MainContent,
    TitleContainer,
    DragonGraphic,
    MainTitle,
    Subtitle,
    SectionTitle,
    TitleWrapper,
    LeftSvg,
    RightSvg
} from './MedievalLayout.styles';

// You'll create this component based on the QuestBoard example
import QuestBoard from '../components/medieval/QuestBoard';
// We can also reuse the skill graph, it will inherit the new font styles!
import SkillGraph from '../components/shadcn/SkillGraph';

// Assume you found a graphic and placed it in your assets
import dragonSvg from '../assets/stgeorge_dragon.svg';
import workerSvg from '../assets/worker_and_flag.min.svg';
import flagSvg from '../assets/flag_bearer.min.svg';

const MedievalLayout = ({ siteData }) => {
    return (
        <PageContainer>
            <MainContent>
                <TitleContainer>
                    <DragonGraphic src={dragonSvg} alt="Dragon Graphic" />
                    <TitleWrapper>
                        <LeftSvg src={workerSvg} alt="Left SVG" />
                        <MainTitle>{siteData.personalInfo.name}</MainTitle>
                        <RightSvg src={flagSvg} alt="Right SVG" />
                    </TitleWrapper>
                    <Subtitle>A Compendium of Digital Works & Proficiencies</Subtitle>
                </TitleContainer>

                <p style={{ textAlign: 'center', fontSize: '1.2rem', lineHeight: 1.6 }}>
                    {siteData.aboutMeContent.introduction} {siteData.aboutMeContent.passion}
                </p>

                <SectionTitle>The Quest Board</SectionTitle>
                <QuestBoard projects={siteData.projects} />

                <SectionTitle>Known Arts & Skills</SectionTitle>
                <SkillGraph skills={siteData.skills} />

                {/* You could create similar themed components for Experience, etc. */}

            </MainContent>
        </PageContainer>
    );
};

export default MedievalLayout;