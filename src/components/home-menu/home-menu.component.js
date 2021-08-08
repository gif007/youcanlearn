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
    updateCourse,
    updateSection
} from '../../redux/location/location.actions';

import HomeIcon from '../../assets/home-30x30.png';


const HomeMenu = ({ unsetSubject, unsetCourse, unsetLesson, unsetSection }) => (
    <MenuWrapper>
        <LinkWrapper to='/' onClick={() => {
            unsetSubject();
            unsetCourse();
            unsetLesson();
            unsetSection();
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
    unsetLesson: () => dispatch(updateLesson(null)),
    unsetSection: () => dispatch(updateSection(null))
});

export default connect(null, mapDispatchToProps)(HomeMenu);