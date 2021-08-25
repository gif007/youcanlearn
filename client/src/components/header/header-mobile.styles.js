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

export const MobileSearchForm = styled.form`
    height: calc(100vh - 75px);
    width: 100%;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 3rem;

    fieldset {
        width: 90vw;
        margin: 0 auto;
        display: flex;
        padding-left: 8px;
        height: 40px;
    }

    input {
        width: 100%;
    }

    input:focus {
        outline: unset;
    }

    button {
        padding: 0 8px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    button:hover {
        cursor: pointer;
        border-left: 1px solid grey;
        background: lightgrey;
    }

`;