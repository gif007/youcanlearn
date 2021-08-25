import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const PreviewContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 4rem 0;
`;

export const PreviewList = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    width: 80vw;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        a + a {
            margin-top: 1rem;
        }
    }
`;

export const PreviewHeader = styled.h2`
    font-size: 1rem;
    color: grey;
    margin-bottom: 2rem;
`;

export const PreviewCaption = styled.p`
    font-size: 1rem;
    color: grey;
    margin: 2rem;
`;

export const PreviewButton = styled.button`
    background: #5797c3;
    border: unset;
    border-radius: 90px;
    color: white;
    padding: 0 20px;
    line-height: 45px;
    font-size: 14px;

    :hover {
        cursor: pointer;
        background: #367097;
    }
`;

export const PreviewListItem = styled(Link)`
    margin-right: 1rem;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    width: 350px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-decoration: none;
    z-index: 0;

    :hover {
        cursor: pointer;

        div:first-child {
            opacity: .15;
        }

        div:last-child {
            background-color: #5797c3;
            width: 90%;
            border-radius: 8px;
        }
    }

    @media screen and (max-width: 800px) {
        width: 90vw;
    }

`;

export const Shade = styled.div`
    position: absolute;
    z-index: 1000;
    background: white;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity .2s;
`;

export const CaptionText = styled.div`
    color: white;
    background: rgba(0,0,0,.5);
    height: 40px;
    font-size: .9rem;
    transition: width .2s,  transform .2s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 16px;
    z-index: 1002;
    
    :hover {
        background-color: #45789C !important;
    }
`;