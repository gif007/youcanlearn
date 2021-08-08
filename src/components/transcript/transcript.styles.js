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
    height: 20px;
`;

export const HeadingText = styled.span`
    border-bottom: 1px solid ${props => props.subject === 'math' ? `rgb(99,181,61)` : `rgb(0,161,113)`};
    padding: 0 12px;
    line-height: 20px;
    z-index: 1001;
    background: white;
`;

export const TextWrapper = styled.p`
    line-height: 1.25rem;
`;