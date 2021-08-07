import styled from 'styled-components';


export const OverviewContainer = styled.div`
    background: white;
    display: flex;
    padding: 2rem;
`;

export const LessonMenuWrapper = styled.div`
    flex-grow: 0;
    margin-left: 7.5rem;

    div#border-container {
        width: 300px;
        border-right: 1px solid #f0f0f0;
        padding-right: 2rem;
        padding-bottom: 1rem;
    }
`;

export const ContentWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    padding-left: 2rem;
`;

export const LessonTitle = styled.h1`
    font-size: 1.5rem;
`;

export const MediaWrapper = styled.div`

`;

export const QuizMenu = styled.div`

`;

export const Transcript = styled.div`

`;