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