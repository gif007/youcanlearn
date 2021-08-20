import React from 'react';

import { connect } from 'react-redux';

import {
    selectCourseById,
    selectSectionsByCourse
} from '../../redux/curriculum/curriculum.selectors';

// import SubjectBanner from '../../components/subject-banner/subject-banner.component';

const CourseComponent = ({ course, sections }) => {
    return (
        <div>
            <h1>{course.title}</h1>
            <h2>Sections:</h2>
            <ul>
                {
                    sections.map((section, index) => {
                        return (
                            <li key={index}>
                                <h3>{section.title}</h3>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
)};

const mapStateToProps = (state, ownProps) => ({
    course: selectCourseById(ownProps.courseId)(state),
    sections: selectSectionsByCourse(ownProps.courseId)(state)
});

export default connect(mapStateToProps)(CourseComponent);