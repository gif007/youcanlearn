import styled from 'styled-components';

import { Link } from 'react-router-dom';


export const CreateAccountWrapper = styled.div`
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        padding: 40px 20px 20px 20px;
    }
`;

export const Heading = styled.h2`
    width: 100%;
    margin-bottom: 1rem;
`;

export const Text = styled.p`
    font-size: .9rem;
    line-height: 1rem;
`;

export const LinkWrapper = styled(Link)`
    margin-top: 1rem;
    text-decoration: none;
    color: white;
    background: #5797c3;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 80px;

    :hover {
        background: #457799;
    }
`;