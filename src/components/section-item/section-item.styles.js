import styled from 'styled-components';


export const SectionWrapper = styled.div`
    margin-bottom: 0.25rem;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const MobileSectionWrapper = styled.div`
    margin: 1rem 0 2rem 0;
    cursor: pointer;
    font-size: 1.125rem;

    @media screen and (min-width: 800px) {
        display: none;
    }
`;