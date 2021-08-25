import styled from 'styled-components';

export const MenuItem = styled.div`
    border-bottom: 1px solid lightgrey;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    flex: 1;
    padding: 14px;
    display: flex;
    align-items: center;

    :hover {
        background: #f0f0f0;
        cursor: pointer;
    }
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 500;
    opacity: .6;
    background: grey;
`;