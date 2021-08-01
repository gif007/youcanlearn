import React from 'react';

import {
    BannerWrapper,
    Nameplate,
    Points,
    PointsTitle,
    PointsContainer
} from './overview-banner.styles';


const OverviewBanner = () => (
    <BannerWrapper>

        <Nameplate>Guest</Nameplate>

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