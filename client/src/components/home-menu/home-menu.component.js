import React from 'react';

import { connect } from 'react-redux';

import { closeHomeMenu } from '../../redux/dropdowns/dropdowns.actions';

import {
    MenuWrapper,
    LinkWrapper,
    AssignmentWrapper
} from './home-menu.styles';

import HomeIcon from '../../assets/home-26x26.png';


const HomeMenu = ({ closeHomeMenu }) => (
    <MenuWrapper>
        <LinkWrapper
            to='/'
            onClick={() => closeHomeMenu()}
        >
            <img src={HomeIcon} alt='home icon'/>
            <span>My overview</span>
        </LinkWrapper>
        <AssignmentWrapper>No assignments so far this week</AssignmentWrapper>
    </MenuWrapper>
);

const mapDispatchToProps = dispatch => ({
    closeHomeMenu: () => dispatch(closeHomeMenu())
});

export default connect(null, mapDispatchToProps)(HomeMenu);