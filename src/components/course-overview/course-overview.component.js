import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import {
    selectSubject,
    selectCourse
} from '../../redux/location/location.selectors';

import {
    updateSubject,
    updateCourse,
    updateLesson,
    updateSection
} from '../../redux/location/location.actions';

import {
    CourseOverviewWrapper,
    CourseTitle
} from './course-overview.styles';

import CourseOutline from '../course-outline/course-outline.component';



const CourseOverview = ({ match, subject, setSubject, course, setCourse, unsetLesson, unsetSection }) => {
    if (course === null) {
        setSubject(match.params.subjectId);
        setCourse(match.params.courseId);
    }

    useEffect(() => {
        unsetLesson();
        unsetSection();
    }, [unsetLesson, unsetSection])

    return (
    <CourseOverviewWrapper>
        <CourseTitle>{course}</CourseTitle>
        {
            course ? (
                <CourseOutline subject={subject} course={course} />
            ) : null
        }
        
    </CourseOverviewWrapper>
    )
};

const mapStateToProps = createStructuredSelector({
    subject: selectSubject,
    course: selectCourse
});

const mapDispatchToProps = dispatch => ({
    setSubject: subject => dispatch(updateSubject(subject)),
    setCourse: course => dispatch(updateCourse(course)),
    unsetLesson: () => dispatch(updateLesson(null)),
    unsetSection: () => dispatch(updateSection(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseOverview);