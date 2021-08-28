import styled from 'styled-components';


export const HealthContainer = styled.div`
    width: 15%;
    height: 50px;
    margin-left: 12px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 800px) {
        position: absolute;
        left: 12px;
        top: 12px;
        margin-left: unset;
    }
`;

export const HeartWrapper = styled.img`
    margin-left: 8px;
`;