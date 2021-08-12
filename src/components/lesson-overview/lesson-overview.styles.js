import styled from 'styled-components';


export const OverviewContainer = styled.div`
    background: white;
    display: flex;
    padding: 2rem;

    @media screen and (max-width: 800px) {
        padding: 2rem 0;
        justify-content: center;
    }
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

    @media screen and (max-width: 800px) {
        margin: unset;
        width: 90vw;
    }
`;

export const LessonTitle = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 420px) {
        font-size: 1.25rem;
        text-align: center;
        margin-bottom: 1rem;
    }
`;

export const MediaWrapper = styled.div`
    margin-bottom: 2rem;
    width: 640px;
    height: 359px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
        width: 90vw;
        height: unset;
    }

    img {
        @media screen and (max-width: 800px) {
            width: 90vw;
        }
    }
`;

export const QuizMenuWrapper = styled.div`
    margin-bottom: 2rem;
    width: 100%;
`;

export const TranscriptWrapper = styled.div`

`;