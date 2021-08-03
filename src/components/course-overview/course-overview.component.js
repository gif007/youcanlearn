import React from 'react';

import {
    CourseOverviewWrapper,
    CourseTitle
} from './course-overview.styles';

import SubjectBanner from '../subject-banner/subject-banner.component';
import CourseOutline from '../course-outline/course-outline.component';


const CourseOverview = ({ match }) => {
    const subject = match.params.subjectId;
    const course = match.params.courseId;

    return (
    <CourseOverviewWrapper>
        <SubjectBanner subject={subject} course={course} />
        <CourseTitle>{course}</CourseTitle>
        <CourseOutline subject={subject} course={course} />
    </CourseOverviewWrapper>
    )
};

export default CourseOverview;