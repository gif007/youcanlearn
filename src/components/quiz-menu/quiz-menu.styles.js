import styled from 'styled-components';


export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ButtonWrapper = styled.button`
    flex: 1;
    height: 50px;
    background: ${props => props.disable ? `#e5e5e5;` : `#5797c3`};
    border: unset;
    border-radius: 90px;
    color: ${props => props.disable ? `black` : `white`};
    cursor: ${props => props.disable ? `` : `pointer`}
`;

export const Chevron = styled.div`
    color: lightgrey;
    font-size: 3rem;
    height: 100%;
    max-width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;