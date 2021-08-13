import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const MenuWrapper = styled.div`
    position: absolute;
    box-shadow: 0 0.7rem 2rem rgb(0 0 0 / 15%);
    z-index: 9001;
    right: 25px;
    top: 75px;
    width: 300px;
    background: white;
    display: flex;
    flex-direction: column;
    font-size: .9rem;

    @media screen and (max-width: 800px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - 75px);
    }
`;

export const LinkWrapper = styled(Link)`
    border-bottom: 1px solid lightgrey;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    flex: 1;
    padding: 14px;
    display: flex;
    align-items: center;

    span {
        margin-left: 12px;
    }

    :hover {
        background: #f0f0f0;
    }

`;

export const AssignmentWrapper = styled.span`
    padding: 14px;
    font-style: italic;
    color: grey;
    border: none;
`;