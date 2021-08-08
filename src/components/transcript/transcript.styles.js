import styled from 'styled-components';

export const TranscriptWrapper = styled.div`
    font-size: .9rem;

    p + p {
        margin-top: 1.5rem;
    }
`;

export const HeadingWrapper = styled.div`
    margin-bottom: 1.5rem;
    border-bottom: 1px solid lightgrey;
    height: 30px;
    cursor: pointer;
`;

export const HeadingText = styled.span`
    border-bottom: 1px solid ${props => props.subject === 'math' ? `rgb(99,181,61)` : `rgb(0,161,113)`};
    padding: 5px 20px;
    line-height: 30px;

    background: white;
`;

export const TextWrapper = styled.p`
    line-height: 1.25rem;
    color: #444;
`;