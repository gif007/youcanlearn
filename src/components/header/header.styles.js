import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderWrapper = styled.div`
    display: flex;
    padding: 0 8rem;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    position: relative;
    background: white;

    @media screen and (max-width: 800px) {
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 1px solid lightgrey;
        padding: unset;
        z-index: 500;
    }
`;

export const DropdownMenuBackdrop = styled.div`
    z-index: 500;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const SubjectsGroup = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const SubjectsButton = styled.button`
    border: unset;
    background: unset;
    color: grey;
    height: 25px;
    cursor: pointer;
    font-size: 0.9rem;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const SearchForm = styled.form`
    border: 1px solid grey;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => props.stretch ? `60px` : `40px`};
    width: ${props => props.stretch ? `90vw` : `250px` };
    background: white;

    @media screen and (max-width: 800px) {
        display: ${props => props.stretch ? `block` : `none`};
    }

    fieldset {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 8px;
    }

    input {
        width: 100%;
    }

    input, button {
        border: unset;
        background: unset;
        padding: unset;
        height: 100%;       
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

export const SettingsGroup = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    
`;

export const SettingsButtons = styled.div`
    display: flex;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const LogoWrapper = styled(Link)`
    flex: 1;
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
    color: black;
    text-decoration: none;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;