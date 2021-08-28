import styled from 'styled-components';


export const SelectorWrapper = styled.form`
    width: 20%;
    height: 50px;
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
        position: absolute;
        margin-left: unset;
        top: 12px;
        left 40%;
    }
`;