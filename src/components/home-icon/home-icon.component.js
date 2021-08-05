import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    updateSubject,
    updateCourse,
    updateLesson
} from '../../redux/location/location.actions'

import { toggleHomeMenuHidden } from '../../redux/dropdowns/dropdowns.actions';

import { IconWrapper } from '../settings-icon/settings-icon.styles';

import Home from '../../assets/home-30x30.png';


const HomeIcon = ({ history, unsetSubject, unsetCourse, unsetLesson, toggleHomeMenu }) => (
    <IconWrapper
        type='button'
        onClick={(e) => {
            e.stopPropagation();
            history.push('/');
            unsetSubject();
            unsetCourse();
            unsetLesson();
            toggleHomeMenu();
        }}
    >
        <img src={Home} alt='Home' /> &#9660;
    </IconWrapper>
);

const mapDispatchToProps = dispatch => ({
    unsetSubject: () => dispatch(updateSubject(null)),
    unsetCourse: () => dispatch(updateCourse(null)),
    unsetLesson: () => dispatch(updateLesson(null)),
    toggleHomeMenu: () => dispatch(toggleHomeMenuHidden()),
})

export default withRouter(connect(null, mapDispatchToProps)(HomeIcon));