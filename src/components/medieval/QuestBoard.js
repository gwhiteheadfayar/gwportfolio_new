import React from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const QuestCard = styled.div`
  border: 2px solid #000000;
  background-color: rgba(0, 0, 0, 0.03);
  padding: 1.5rem;
`;

const QuestHeader = styled.h3`
  font-family: 'Deutsch Gothic', serif;
  font-size: 1.75rem;
  font-weight: normal;
  margin: 0 0 1rem 0;
  border-bottom: 2px solid black;
  padding-bottom: 0.5rem;
`;

const ObjectiveText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
`;

const ViewQuestLink = styled.a`
  font-family: 'Baskerville', 'Georgia', serif;
  font-weight: bold;
  font-style: italic;
  font-size: 1rem;
  color: #000000;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #5c4033; /* A dark brown for hover */
  }
`;

const QuestBoard = ({ projects }) => {
    return (
        <BoardContainer>
            {projects.map((project) => (
                <QuestCard key={project.name}>
                    <QuestHeader>{project.name}</QuestHeader>
                    <ObjectiveText>{project.description}</ObjectiveText>
                    <ViewQuestLink href={project.url} target="_blank" rel="noopener noreferrer">
                        Embark on Quest...
                    </ViewQuestLink>
                </QuestCard>
            ))}
        </BoardContainer>
    );
};

export default QuestBoard;