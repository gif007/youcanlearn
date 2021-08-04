import styled from 'styled-components';


export const OutlineWrapper = styled.div`
    width: 100%;
`;

export const SectionList = styled.ul`
    display: flex;
    align-items: center;
    margin-left: 8rem;
    font-size: .9rem;
`;

export const LessonList = styled.ul`

`;

export const SectionTitle = styled.div`
    padding-bottom: 1rem;
    border-bottom: 1px solid #f0f0f0;
`;

export const SectionWrapper = styled.li`
    margin-left: 1rem;
    width: 400px;
`;

export const LessonLink = styled.a`
    color: black;
    text-decoration: none;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;

    span {
        font-size: 1.5rem;
        color: lightgrey;
        font-weight: 700;
    }

    :hover {
        background: linear-gradient(0.25turn, #ffffff, #f0f0f0, #ffffff);

        span {
            color: black;
        }
    }
`;