import styled from 'styled-components';


export const SectionTitle = styled.h2`
    display: flex;
    align-items: center;

    div {
        margin-right: 8px;
    }
`;

export const Chevron = styled.div`

    ${props => props.lessonsVisible ? `transform: rotate(90deg)` : null};

`;

export const LessonItem = styled.li`
    border-bottom: 1px solid lightgrey;
    width: 100%;
    display: block;
    padding: 12px 0;
`;

export const ListWrapper = styled.ul`

    li:first-of-type{
        border-top: 1px solid lightgrey;
    }
`;