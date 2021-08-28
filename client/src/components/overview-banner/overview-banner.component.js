import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectCurrentUser,
    selectUserPoints
} from '../../redux/user/user.selectors';


import {
    BannerWrapper,
    Nameplate,
    Points,
    PointsTitle,
    PointsContainer
} from './overview-banner.styles';

import HomeIcon from '../../assets/home-40x40.png';


const OverviewBanner = ({ currentUser, points }) => {
    const pointsArray = Array.from(points.toString().padStart(4, ' '));
    
    return (
    <BannerWrapper>
        <Nameplate><img src={HomeIcon} alt='home icon' /><span>{currentUser ? currentUser.fname : null}</span></Nameplate>
        <Points>
            <PointsTitle>Points earned</PointsTitle>
            <PointsContainer>
                {
                    pointsArray.map((item, index) => {
                        return <span key={index}>{item}</span>
                    })
                }
            </PointsContainer>
        </Points>
    </BannerWrapper>
)};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    points: selectUserPoints
})

export default connect(mapStateToProps)(OverviewBanner);