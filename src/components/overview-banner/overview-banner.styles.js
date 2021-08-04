import styled from 'styled-components';


export const BannerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(rgba(0,0,0,.15) 100%,#000),linear-gradient(
        25deg
        ,#0abb97,#2295da);
    min-height: 8rem;
    padding: 0 8rem
`;

export const Nameplate = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
    color: white;

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
    width: 100%;
    display: flex;
    background-color: hsla(0,0%,100%,.3);
    border-radius: 8px;

    span {
        flex: 1;
        text-align: center;
        border-left: 1px solid rgba(0,0,0,.1);
        padding: 4px 8px;
        font-size: 1.25rem;
        font-weight: 700;
    }

    span:nth-of-type(1) {
        border: none;
    }
`;