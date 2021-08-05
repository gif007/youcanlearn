import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    updateSubject,
    updateCourse,
    updateLesson
} from '../../redux/location/location.actions';

import {
    LessonLink,
    LessonTitle,
    IconWrapper,
    ChevronWrapper
} from './lesson-menu-item.styles'


const LessonMenuItem = ({url, subject, course, lesson, history, setSubject, setCourse, setLesson}) => (
    <div>
        <LessonLink onClick={() => {
            history.push(url);
            setSubject(subject);
            setLesson(lesson.title);
            setCourse(course);
        }}>
            <LessonTitle>
                <IconWrapper subject={subject}>
                    <img src={lesson.iconUrl} alt={lesson.title} />
                </IconWrapper>
                {lesson.title}
            </LessonTitle>
            <ChevronWrapper id='chevron'>&rsaquo;</ChevronWrapper>
        </LessonLink>
    </div>
);

const mapDispatchToProps = dispatch => ({
    setSubject: subject => dispatch(updateSubject(subject)),
    setCourse: course => dispatch(updateCourse(course)),
    setLesson: lesson => dispatch(updateLesson(lesson))
});

export default withRouter(connect(null, mapDispatchToProps)(LessonMenuItem));