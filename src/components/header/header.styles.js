import styled from 'styled-components';


export const HeaderWrapper = styled.div`
    display: flex;
    padding: 0 8rem;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    position: relative;
    background: white;
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
`;



export const SearchForm = styled.form`
    border: 1px solid grey;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 250px;

    fieldset {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 8px;
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

    button {
        border: unset;
        background: unset;
        padding: unset;
        margin: 0 12px;
        display: flex;
        align-items: center;
        color: grey;
        cursor: pointer;
    }
`;

export const LogoWrapper = styled.div`
    flex: 1;
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;

    :hover {
        cursor: pointer;
    }
`;