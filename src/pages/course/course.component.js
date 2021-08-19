import React from 'react';
import { connect } from 'react-redux';
import {
    selectCourseById
} from '../../redux/curriculum/curriculum.selectors';

// import SubjectBanner from '../../components/subject-banner/subject-banner.component';

const CourseComponent = ({ course }) => {
    return (
        <div>
            <h1>{course.title}</h1>
        </div>
)};

const mapStateToProps = (state, ownProps) => ({
    course: selectCourseById(ownProps.courseId)(state)
});

export default connect(mapStateToProps)(CourseComponent);