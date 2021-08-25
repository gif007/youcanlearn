import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectUserToken,
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


const OverviewBanner = ({ currentUser, token }) => (
    <BannerWrapper>
        <Nameplate><img src={HomeIcon} alt='home icon' /><span>{currentUser ? currentUser.fname : null}</span></Nameplate>
        <div onClick={() => {
            axios({
                url: 'private-resource',
                method: 'post',
                headers:  { authorization: `Bearer ${token}` },
                data: {
                    message: 'passed in message'
                }
            })
            .then(res => res.data)
            .then(data => alert(data.message))
            .catch(err => console.log(err));
        }}>
            click me
        </div>
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
    currentUser: selectCurrentUser,
    token: selectUserToken
})

export default connect(mapStateToProps)(OverviewBanner);