import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #f9fafb; /* A light gray background, common in shadcn */
  color: #111827; /* Dark gray for text */
  font-family: "Inter", sans-serif; /* Using your existing font  */
  min-height: 100vh;
`;

export const MainContent = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600; /* */
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb; /* Subtle separator */
`;