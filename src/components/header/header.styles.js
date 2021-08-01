import styled from 'styled-components';


export const HeaderWrapper = styled.div`
    display: flex;
    padding: 0 8rem;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    position: relative;
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

export const SubjectsMenu = styled.div`
    position: absolute;
    left: 8rem;
    top: 75px;
    display: flex;
    box-shadow: 0 0.7rem 2rem rgb(0 0 0 / 15%);
    width: 80vw;
    height: 500px;
    z-index: 9001;
    background: white;
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

export const MenuArea = styled.div`
    width: 20%;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid lightgrey;
    cursor: pointer;
    background: ${props => props.bg};
    color: ${props => props.bg === 'white' ? 'black' : 'white'};
    
`;

export const ContentArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    background: ${props => props.subject === 'math' ? `rgb(99, 181, 61)`: `rgb(0, 161, 113)`};
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
`;