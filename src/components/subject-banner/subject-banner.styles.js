import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const BannerWrapper = styled.div`
    min-height: 80px;
    display: flex;
    align-items: center;
    background: ${props => props.subject==='math' ? `rgb(99, 181, 61)`: `rgb(0, 161, 113)`};
    padding-left: 8rem;
    color: white;
`;

export const PlainText = styled.div`

`;

export const LinkWrapper = styled(Link)`
    color: inherit;
    text-decoration: none;
`;