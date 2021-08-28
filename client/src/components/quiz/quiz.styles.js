import styled from 'styled-components';


export const QuizWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px 40px 40px;
    overflow: auto;

    @media screen and (max-width: 800px) {
        padding: 0 20px 20px 20px;
    }
`;

export const QuizHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;

    @media screen and (max-width: 800px) {
        height: 140px;
        align-items: unset;
    }
`;

export const HorizontalRule = styled.hr`
    position: absolute;
    top: 70px;
    width: 100%;
    height: 1px;
    color: lightgrey;
    padding: unset;
    margin: unset;

    @media screen and (max-width: 800px) {
        top: 140px;
    }
`;
