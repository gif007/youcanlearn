import styled from 'styled-components';


export const CourseLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    line-height: 80px;
    width: 350px;
    padding: 0 12px;
    font-size: .9rem;
    letter-spacing: .3px;
    margin: .7rem;
    color: black;
    text-decoration: none;
    cursor: pointer;

    :hover {
        background: lightgrey;
    }
`;

export const CourseLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Circle = styled.div`
    background: ${props => props.subject === 'math' ? 'rgb(99,181,61)' : 'rgb(0,161,113)'};
    width: 50px;
    height: 50px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    color: white;
    font-weight: 700;
    font-size: 18px;
`;

export const CourseTitle = styled.div`
    margin-left: 12px;
`;