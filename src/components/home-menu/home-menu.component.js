import React from 'react';

import {
    MenuWrapper,
    LinkWrapper,
    AssignmentWrapper
} from './home-menu.styles';

import HomeIcon from '../../assets/home-30x30.png';


const HomeMenu = () => (
    <MenuWrapper>
        <LinkWrapper to='/'>
            <img src={HomeIcon} alt='home icon'/>
            <span>My overview</span>
        </LinkWrapper>
        <AssignmentWrapper>No assignments so far this week</AssignmentWrapper>
    </MenuWrapper>
);

export default HomeMenu;