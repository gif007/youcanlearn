import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const SearchPageContainer = styled.div`
    min-height: 800px;
    background: white;
`;

export const ResultsHeading = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 3rem;
`;

export const ResultsList = styled.ul`
    li + li {
        margin-top: 2rem;
    }
`;

export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 8rem;
`;

export const ResultContainer = styled(Link)`
    height: 168px;
    display: flex;
    text-decoration: none;
    color: black;
    width: 50vw;
    border: 1px solid lightgrey;

    :hover {
        box-shadow: 0 0.7rem 2rem rgb(0 0 0 / 15%);
    }
`;

export const CircleWrapper = styled.div`
    height: 100%;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LessonMediaWrapper = styled.img`
    height: 100%;
    width: 300px;
`;

export const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

export const ItemHeading = styled.h2`
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const ItemSubheading = styled.span`
    color: grey;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    font-size: .9rem;
`;

export const ParentSubject = styled.span`
    text-transform: uppercase;
    color: white;
    background: ${props => props.subject === 'math' ? `rgb(99,181,61)` : `rgb(0,161,113)`};
    padding: .5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    font-size: .9rem;
`;