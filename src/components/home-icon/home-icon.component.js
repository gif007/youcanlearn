import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    updateSubject,
    updateCourse,
    updateLesson
} from '../../redux/location/location.actions'

import { IconWrapper } from '../settings-icon/settings-icon.styles';

import Home from '../../assets/home-30x30.png';


const HomeIcon = ({ history, unsetSubject, unsetCourse, unsetLesson }) => (
    <IconWrapper
        type='button'
        onClick={() => {
            history.push('/');
            unsetSubject();
            unsetCourse();
            unsetLesson();
        }}
    >
        <img src={Home} alt='Home' /> &#9660;
    </IconWrapper>
);

const mapDispatchToProps = dispatch => ({
    unsetSubject: () => dispatch(updateSubject(null)),
    unsetCourse: () => dispatch(updateCourse(null)),
    unsetLesson: () => dispatch(updateLesson(null))
})

export default withRouter(connect(null, mapDispatchToProps)(HomeIcon));