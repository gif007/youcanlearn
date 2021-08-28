import styled from 'styled-components';


export const PointsContainer = styled.div`
    width: 55%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        position: absolute;
        top: 70px;
        left: 5%;
        width: 90%;
    }
`;

export const PointBlock = styled.div`
    height: 30px;
    width: 19%;
    border-radius: 6px;
    background: ${props => props.filled ? `blue` : `#f0f0f0`};
`;
