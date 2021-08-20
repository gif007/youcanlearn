import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const BannerWrapper = styled.div`
    min-height: 80px;
    display: flex;
    align-items: center;
    background: ${props => props.subject==='math' ? `rgb(99, 181, 61)`: `rgb(0, 161, 113)`};
    padding-left: 8rem;
    color: white;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const PlainText = styled.div`
`;

export const LinkWrapper = styled(Link)`
    color: inherit;
    text-decoration: none;
    height: 80px;
    display: flex;
    align-items: center;

    :hover {
        span:first-child {
            background: linear-gradient(
                90deg
                ,transparent,rgba(0,0,0,.1));
        }

        span:last-child {
            background: linear-gradient(
                45deg
                ,transparent,transparent 50%,rgba(0,0,0,.1) 0,rgba(0,0,0,.1));
        }
    }
`;

export const LinkText = styled.span`
    height: 80px;
    display: flex;
    align-items: center;
    background: linear-gradient(
        90deg
        ,transparent,rgba(0,0,0,.05));
`;

export const ArrowEnd = styled.span`
    width: 58px;
    height: 58px;
    margin-left: -29px;
    border-radius: 9px;
    transform: rotate(
        45deg
        );
    background: linear-gradient(
        45deg
        ,transparent,transparent 50%,rgba(0,0,0,.05) 0,rgba(0,0,0,.05));
`;