import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column; /* [cite: 243] */
  height: 100vh;
  overflow: hidden;
`;

export const TopSection = styled.div`
  flex: 0 0 auto; /* [cite: 244] */
`;

export const BottomSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row; /* [cite: 245] */
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column; /* [cite: 247] */
  }
`;

export const LeftSection = styled.div`
  flex: 1; /* [cite: 248] */
  width: 75%;
  background-color: ${(props) => props.bgColor || "#000000"}; /* [cite: 249] */
  transition: background-color 0.5s ease; /* [cite: 249] */
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100%; /* [cite: 250] */
    height: 75vh;
  }
`;

export const RightSection = styled.div`
  width: 25%; /* [cite: 251] */
  background-color: ${(props) => props.bgColor || "#000000"}; /* [cite: 252] */
  display: flex; /* [cite: 252] */
  overflow: hidden;

  @media (max-width: 900px) {
    width: 100%; /* [cite: 253] */
    height: 25vh;
  }
`;

export const NameHeader = styled.h1`
  font-family: "Inter", sans-serif; /* [cite: 254] */
  font-size: 60px; /* [cite: 254] */
  font-weight: 700; /* [cite: 254] */
  margin-top: 16px; /* [cite: 254] */
  margin-bottom: 0; /* [cite: 254] */
  margin-left: 0.5rem; /* [cite: 254] */
  text-align: left; /* [cite: 254] */
  color: white; /* [cite: 255] */
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.25); /* [cite: 255] */
  -webkit-font-smoothing: antialiased; /* [cite: 255] */
  -moz-osx-font-smoothing: grayscale; /* [cite: 255] */
  text-rendering: optimizeLegibility; /* [cite: 255] */
`;