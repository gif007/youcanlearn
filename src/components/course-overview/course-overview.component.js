import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import {
    updateSubject,
    updateCourse,
    updateLesson
} from '../../redux/location/location.actions';

import {
    CourseOverviewWrapper,
    CourseTitle
} from './course-overview.styles';

import CourseOutline from '../course-outline/course-outline.component';



const CourseOverview = ({ match, setSubject, setCourse, unsetLesson }) => {
    const subject = match.params.subjectId;
    const course = match.params.courseId;

    useEffect(() => {
        setSubject(subject);
        setCourse(course);
        unsetLesson();
    }, [unsetLesson, setSubject, subject, setCourse, course])

    return (
        <CourseOverviewWrapper>
            <CourseTitle>{course}</CourseTitle>
            <CourseOutline subject={subject} course={course} />
        </CourseOverviewWrapper>
    )
};

const mapDispatchToProps = dispatch => ({
    setSubject: subject => dispatch(updateSubject(subject)),
    setCourse: course => dispatch(updateCourse(course)),
    unsetLesson: () => dispatch(updateLesson(null))
})

export default connect(null, mapDispatchToProps)(CourseOverview);