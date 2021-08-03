import styled from 'styled-components';


export const BannerWrapper = styled.div`
    min-height: 80px;
    display: flex;
    align-items: center;
    background: ${props => props.subject==='math' ? `rgb(99, 181, 61)`: `rgb(0, 161, 113)`};
    padding-left: 8rem;
    color: white;
`;
