import React from 'react';

import {
    BannerWrapper,
    Nameplate,
    Points,
    PointsTitle,
    PointsContainer
} from './overview-banner.styles';

import HomeIcon from '../../assets/home-40x40.png';


const OverviewBanner = () => (
    <BannerWrapper>

        <Nameplate><img src={HomeIcon} alt='home icon' /><span>Guest</span></Nameplate>

        <Points>
            <PointsTitle>Points earned</PointsTitle>
            <PointsContainer>
                <span></span>
                <span>2</span>
                <span>5</span>
                <span>0</span>
            </PointsContainer>
        </Points>
    </BannerWrapper>
);

export default OverviewBanner;