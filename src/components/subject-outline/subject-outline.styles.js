import styled from 'styled-components';


export const OutlineWrapper = styled.div`
    color: black;
`;

export const CourseTitle = styled.div`
    font-weight: 700;
    margin-bottom: 0.5rem;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 800px) {
        font-size: 1.25rem;
        border-bottom: 1px solid lightgrey;
        padding-bottom: 6px;

        a {
            color: black;
        }
    }

`;

export const SectionList = styled.ul`
    margin-bottom: 2rem;

    @media screen and (max-width: 800px) {
        margin-top: 2rem;
    }

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
    margin: 1rem 0 2rem 0;
    cursor: pointer;
    font-size: 1.125rem;

    @media screen and (min-width: 800px) {
        display: none;
    }
`;