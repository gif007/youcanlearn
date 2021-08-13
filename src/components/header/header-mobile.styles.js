import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const MobileLink = styled(Link)`
    width: 25vw;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    text-decoration: none;
    font-size: 12px;

    img {
        margin-bottom: .25rem;
    }
`;

export const MobileButton = styled.button`
    width: 25vw;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: unset;
    font-size: 12px;

    img {
        margin-bottom: .25rem;
    }
`;

export const MobileButtonsContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

    button, a {
        border-left: 1px solid lightgrey;
    }

    button:first-child {
        border-left: none;
    }

    @media screen and (min-width: 800px) {
        display: none;
    }
`;