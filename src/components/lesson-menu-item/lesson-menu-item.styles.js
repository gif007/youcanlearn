import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LessonLink = styled(Link)`
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    cursor: pointer;

    :hover {
        background: linear-gradient(0.25turn, #ffffff, #f0f0f0, #ffffff);

        span#chevron {
            color: black;
        }
    }
`;

export const LessonWrapper = styled.div`
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
`;

export const ChevronWrapper = styled.span`
    font-size: 1.5rem;
    color: lightgrey;
    font-weight: 700;
    padding-left: 12px;
`;

export const DoubleChevronWrapper = styled.span`
    font-size: 1.5rem;
    color: ${props => props.subject === 'math' ? `rgb(99,181,61)` : `rgb(0,161,113)`};
    font-weight: 700;
    padding-left: 12px;
`;

export const LessonTitle = styled.span`
    display: flex;
    align-items: center;
`;

export const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    height: 45px;
    width: 45px;
    flex-shrink: 0;
    border-radius: 100px;
    background: ${props => props.subject==='math' ? `rgb(99, 181, 61)`: `rgb(0, 161, 113)`};
`;

export const LinkWrapper = styled.div`
    a {
        color: black;
        text-decoration: none;
    }
`;