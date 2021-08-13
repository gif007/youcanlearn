import styled from 'styled-components';


export const OutlineWrapper = styled.div`
    color: white;
`;

export const CourseTitle = styled.div`
    font-weight: 700;
    margin-bottom: 0.5rem;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 800px) {
        font-size: 1.125rem;
    }

`;

export const SectionList = styled.ul`
    margin-bottom: 2rem;

`;

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
    margin-bottom: 0.25rem;
    cursor: pointer;
    font-size: 1.25rem;

    @media screen and (min-width: 800px) {
        display: none;
    }
`;