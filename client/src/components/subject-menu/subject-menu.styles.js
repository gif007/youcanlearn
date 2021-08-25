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

    @media screen and (max-width: 800px) {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100vh - 75px);
        z-index: 9001;
        background: rgba(255,255,255,.97);
        overflow: auto;
    }
`;

export const MenuArea = styled.div`
    width: 20%;

    @media screen and (max-width: 800px) {
        width: 100%;
        display: ${props => props.subjectsVisible ? `block` : `none`};
    }
`;

export const MobileMenuItem = styled.div`
    padding: 1rem;
    border-bottom: 1px solid #f0f0f0;
    font-size: 1.25rem;
    cursor: pointer;

    span {
        float: right;
    }

    @media screen and (min-width: 800px) {
        display: none;
    }
`;

export const MobileContentHeading = styled.div`
    cursor: pointer;
    margin-bottom: 2rem;
    color: black;
    font-weight: 700;
    font-size: 1.25rem;

    div {
        transform: rotate(180deg);
        float: left;
        margin-right: .5rem;
    }

    @media screen and (min-width: 800px) {
        display: none;
    }
`;

export const MenuItem = styled.div`
    border-bottom: 1px solid lightgrey;
    cursor: pointer;
    background: ${props => props.bg};
    color: ${props => props.bg === 'white' ? 'black' : 'white'};

    a {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
    
`;

export const ContentArea = styled.div`
    padding: 3rem 2rem;
    width: 80%;
    background: ${props => props.subject === 1 ? `rgb(99, 181, 61)`: `rgb(0, 161, 113)`};
    font-size: .9rem;

    a {
        color: white;
        text-decoration: none;
        
        :hover {
            text-decoration: underline;
        }
    }

    @media screen and (max-width: 800px) {
        display: ${props => props.contentVisible ? 'block' : 'none'};
        width: 100%;
        background: white;
    }
`;