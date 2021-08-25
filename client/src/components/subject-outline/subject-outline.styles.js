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