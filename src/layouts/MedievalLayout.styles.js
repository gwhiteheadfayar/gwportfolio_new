import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: #e6a100; /* The rich yellow from the game cover */
  color: #000000; /* Black text for high contrast */
  font-family: 'Baskerville', 'Georgia', serif; /* Default to Baskerville */
  min-height: 100vh;
  padding: 2rem 1rem;
`;

export const MainContent = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DragonGraphic = styled.img`
  width: 10rem;
  margin-bottom: 0.5rem; /* Overlap the title slightly */
`;

export const MainTitle = styled.h1`
  font-family: 'Deutsch Gothic', serif;
  font-size: 6rem; /* Large and impactful */
  line-height: 1;
  font-weight: normal;
  margin: 0;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  font-style: italic;
  margin-top: 1rem;
`;

export const SectionTitle = styled.h2`
  font-family: 'Deutsch Gothic', serif;
  font-size: 3rem;
  font-weight: normal;
  text-align: center;
  margin: 4rem 0 2rem 0;
  text-transform: uppercase;
`;

export const LeftSvg = styled.img`
  width: 6rem;
  margin-right: 0.25rem;
`;

export const RightSvg = styled.img`
  width: 6rem;
  margin-left: 0.25rem;
`;