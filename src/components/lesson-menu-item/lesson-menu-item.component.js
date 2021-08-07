import React from 'react';
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
    DoubleChevronWrapper,
    LinkWrapper,
    LessonWrapper
} from './lesson-menu-item.styles'


const LessonMenuItem = ({url, subject, course, lesson, setSubject, setCourse, setLesson, currentLesson}) => (
    <>
    {
        currentLesson ? (
            <LessonWrapper>
                <LessonTitle>
                    <IconWrapper subject={subject}>
                        <img src={lesson.iconUrl} alt={lesson.title} />
                    </IconWrapper>
                    {lesson.title}
                </LessonTitle>
                <DoubleChevronWrapper subject={subject}>&rsaquo;&rsaquo;</DoubleChevronWrapper>
            </LessonWrapper>
        ) : (
            <LinkWrapper>
                <LessonLink
                    to={url}
                    onClick={() => {
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
            </LinkWrapper>
        )
    }
    </>
);

const mapDispatchToProps = dispatch => ({
    setSubject: subject => dispatch(updateSubject(subject)),
    setCourse: course => dispatch(updateCourse(course)),
    setLesson: lesson => dispatch(updateLesson(lesson))
});

export default connect(null, mapDispatchToProps)(LessonMenuItem);