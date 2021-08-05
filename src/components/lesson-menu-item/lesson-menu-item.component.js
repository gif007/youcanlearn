import React from 'react';
import { Link } from 'react-router-dom';
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
    ChevronWrapper,
    LinkWrapper
} from './lesson-menu-item.styles'


const LessonMenuItem = ({url, subject, course, lesson, setSubject, setCourse, setLesson}) => (
    <LinkWrapper>
        <Link to={url}>
            <LessonLink onClick={() => {
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
        </Link>
    </LinkWrapper>
);

const mapDispatchToProps = dispatch => ({
    setSubject: subject => dispatch(updateSubject(subject)),
    setCourse: course => dispatch(updateCourse(course)),
    setLesson: lesson => dispatch(updateLesson(lesson))
});

export default connect(null, mapDispatchToProps)(LessonMenuItem);