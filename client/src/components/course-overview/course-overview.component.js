import React from 'react';

import { connect } from 'react-redux';

import { selectCourseById } from '../../redux/curriculum/curriculum.selectors';

import {
    CourseOverviewWrapper,
    CourseTitle
} from './course-overview.styles';

import CourseOutline from '../course-outline/course-outline.component';


const CourseOverview = ({ course }) => {

    return (
        <CourseOverviewWrapper>
            <CourseTitle>{ course.title }</CourseTitle>
            <CourseOutline courseId={course.id} />
        </CourseOverviewWrapper>
    )
};

const mapStateToProps = (state, ownProps) => ({
    course: selectCourseById(ownProps.courseId)(state)
})

export default connect(mapStateToProps)(CourseOverview);