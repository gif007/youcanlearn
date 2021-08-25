import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectCurrentUser
} from '../../redux/user/user.selectors';


import {
    BannerWrapper,
    Nameplate,
    Points,
    PointsTitle,
    PointsContainer
} from './overview-banner.styles';

import HomeIcon from '../../assets/home-40x40.png';


const OverviewBanner = ({ currentUser }) => (
    <BannerWrapper>
        <Nameplate><img src={HomeIcon} alt='home icon' /><span>{currentUser ? currentUser.fname : null}</span></Nameplate>
        <Points>
            <PointsTitle>Points earned</PointsTitle>
            <PointsContainer>
                <span></span>
                <span></span>
                <span></span>
                <span>{currentUser ? currentUser.points : null}</span>
            </PointsContainer>
        </Points>
    </BannerWrapper>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(OverviewBanner);