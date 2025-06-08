import React from 'react';
import HeaderShadcn from '../components/shadcn/HeaderShadcn';
import RecentlyPlayed from '../components/shadcn/RecentlyPlayed';
import CommandMenu from '../components/shadcn/CommandMenu';
import { PageContainer, MainContent, Section, SectionTitle } from './ShadcnLayout.styles';

// We'll create these new component versions in the next step
import AboutMeShadcn from '../components/shadcn/AboutMeShadcn';
import ProjectsListShadcn from '../components/shadcn/ProjectsListShadcn';
import ExperienceShadcn from '../components/shadcn/ExperienceShadcn';

const ShadcnLayout = ({ siteData }) => {
    return (
        <PageContainer>
            {/* We can reuse the existing Header, it's simple enough */}
            <HeaderShadcn currentPath="Shadcn" email={siteData.personalInfo.email}/>

            <CommandMenu socialLinks={siteData.socialLinks} />

            <MainContent>
                <Section>
                    <SectionTitle>About Me</SectionTitle>
                    <AboutMeShadcn
                        aboutContent={siteData.aboutMeContent}
                        skills={siteData.skills}
                    />
                </Section>

                <Section>
                    <SectionTitle>Now Listening To:</SectionTitle>
                    <RecentlyPlayed />
                </Section>

                <Section>
                    <SectionTitle>Experience</SectionTitle>
                    <ExperienceShadcn experiences={siteData.experiences} />
                </Section>

                <Section>
                    <SectionTitle>Projects</SectionTitle>
                    <ProjectsListShadcn projects={siteData.projects} />
                </Section>

            </MainContent>
        </PageContainer>
    );
};

export default ShadcnLayout;