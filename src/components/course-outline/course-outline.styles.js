import styled from 'styled-components';


export const OutlineWrapper = styled.div`
    width: 100%;
`;

export const SectionList = styled.ul`
    display: flex;
    margin-left: 8rem;
    font-size: .9rem;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        margin-left: 1rem;
    }
`;

export const SectionWrapper = styled.li`
    margin-left: 1rem;
    width: 300px;

    @media screen and (max-width: 800px) {
        width: 90vw;
        margin: unset;
    }
`;
