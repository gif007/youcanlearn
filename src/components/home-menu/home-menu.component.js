import React from 'react';
import { connect } from 'react-redux';

import {
    MenuWrapper,
    LinkWrapper,
    AssignmentWrapper
} from './home-menu.styles';

import {
    updateLesson,
    updateSubject,
    updateCourse
} from '../../redux/location/location.actions';

import HomeIcon from '../../assets/home-30x30.png';


const HomeMenu = ({ unsetSubject, unsetCourse, unsetLesson }) => (
    <MenuWrapper>
        <LinkWrapper to='/' onClick={() => {
            unsetSubject();
            unsetCourse();
            unsetLesson();
        }}>
            <img src={HomeIcon} alt='home icon'/>
            <span>My overview</span>
        </LinkWrapper>
        <AssignmentWrapper>No assignments so far this week</AssignmentWrapper>
    </MenuWrapper>
);

const mapDispatchToProps = dispatch => ({
    unsetSubject: () => dispatch(updateSubject(null)),
    unsetCourse: () => dispatch(updateCourse(null)),
    unsetLesson: () => dispatch(updateLesson(null))
});

export default connect(null, mapDispatchToProps)(HomeMenu);