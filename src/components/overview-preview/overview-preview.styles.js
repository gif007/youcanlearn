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
    font-size: 1.5rem;
`;

export const PreviewCaption = styled.p`
`;