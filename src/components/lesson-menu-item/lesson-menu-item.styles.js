import styled from 'styled-components';


export const LessonLink = styled.div`
    color: black;
    text-decoration: none;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 1rem;
    cursor: pointer;

    :hover {
        background: linear-gradient(0.25turn, #ffffff, #f0f0f0, #ffffff);

        span#chevron {
            color: black;
        }
    }
`;

export const ChevronWrapper = styled.span`
    font-size: 1.5rem;
    color: lightgrey;
    font-weight: 700;
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
    height: 50px;
    width: 50px;
    border-radius: 100px;
    background: ${props => props.subject==='math' ? `rgb(99, 181, 61)`: `rgb(0, 161, 113)`};
`;