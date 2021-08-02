import styled from 'styled-components';


export const SubjectMenuWrapper = styled.div`
    position: absolute;
    left: 8rem;
    top: 75px;
    display: flex;
    box-shadow: 0 0.7rem 2rem rgb(0 0 0 / 15%);
    width: 80vw;
    height: 500px;
    z-index: 9001;
    background: white;
`;

export const MenuArea = styled.div`
    width: 20%;
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid lightgrey;
    cursor: pointer;
    background: ${props => props.bg};
    color: ${props => props.bg === 'white' ? 'black' : 'white'};
    
`;

export const ContentArea = styled.div`
    padding: 3rem 2rem;
    width: 80%;
    background: ${props => props.subject === 'math' ? `rgb(99, 181, 61)`: `rgb(0, 161, 113)`};
    font-size: .9rem;

    a {
        color: white;
        text-decoration: none;
        
        :hover {
            text-decoration: underline;
        }
    }
`;