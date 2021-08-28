import styled from 'styled-components';


export const QuizModalWrapper = styled.div`
    position: fixed;
    top: 5%;
    width: 650px;
    left: calc(50vw - 325px);
    background: white;
    z-index: 9001;
    border-radius: 8px;
    overflow: auto;

    @media screen and (max-width: 800px) {
        width: 100vw;
        height: 100vh;
        left: 0;
        top: 0;
        border-radius: unset;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background: unset;
    border: unset;
    border-radius: 60px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    z-index: 9999;

    :hover {
        background: #f0f0f0;
        cursor: pointer;
    }
`;