import styled from 'styled-components';


export const PreviewContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    * {
        margin: 3rem 0;
    }
`;

export const PreviewList = styled.div`
    display: flex;

    div {
        margin: 0 5rem;
    }
`;

export const PreviewHeader = styled.h2`
    font-size: 1rem;
    color: grey;
`;

export const PreviewCaption = styled.p`
    font-size: 1rem;
    color: grey;
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