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

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 640px;
    margin-left: 32px;
`;

export const LessonTitle = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const MediaWrapper = styled.div`
    margin-bottom: 2rem;
    width: 640px;
    height: 359px;

    div {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
    }
`;

export const QuizMenuWrapper = styled.div`
    margin-bottom: 2rem;
    width: 100%;
`;

export const TranscriptWrapper = styled.div`

`;