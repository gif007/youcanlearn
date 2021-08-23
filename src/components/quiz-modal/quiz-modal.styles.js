import styled from 'styled-components';


export const QuizModalWrapper = styled.div`
    position: fixed;
    top: 30%;
    width: 600px;
    left: calc(50vw - 300px);
    background: white;
    z-index: 9001;
    border-radius: 8px;

    @media screen and (max-width: 800px) {
        width: 90vw;
        left: 5vw;
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

    :hover {
        background: #f0f0f0;
        cursor: pointer;
    }
`;