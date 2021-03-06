import styled from 'styled-components';


export const BannerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(rgba(0,0,0,.15) 100%,#000),linear-gradient(
        25deg
        ,#0abb97,#2295da);
    min-height: 8rem;
    padding: 0 8rem;

    @media screen and (max-width: 800px) {
        justify-content: center;
        padding: unset;
    }
`;

export const Nameplate = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    color: white;

    @media screen and (max-width: 800px) {
        display: none;
    }

    span {
        margin-left: 12px;
        padding-top: 6px;
        height: 40px;
    }
`;

export const Points = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    color: white;
`;

export const PointsTitle = styled.div`
    width: 100%;
    padding: 4px;
    margin-bottom: 8px;
`;

export const PointsContainer = styled.div`
    position: relative;
    width: 100%;
    height: 28px;
    display: flex;
    background-color: hsla(0,0%,100%,.3);
    border-radius: 8px;

    span {
        flex: 1;
        text-align: center;
        border-left: 1px solid rgba(0,0,0,.1);
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 28px;
    }

    span:nth-of-type(1) {
        border: none;
    }
`;
