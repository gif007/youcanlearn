import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    selectSubjectById,
    selectCoursesBySubject
} from '../../redux/curriculum/curriculum.selectors';

// import SubjectBanner from '../../components/subject-banner/subject-banner.component';

const SubjectComponent = ({ subject, courses }) => {

    return (
    <div>
        <h1>{subject.title}</h1>
        <h2>Courses:</h2>
        <ul>
            {
                courses.map((course, index) => {
                    return <li key={index}><Link to={`/c/${course.id}`}>{course.title}</Link></li>
                })
            }
        </ul>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    subject: selectSubjectById(ownProps.subjectId)(state),
    courses: selectCoursesBySubject(ownProps.subjectId)(state)
});

export default connect(mapStateToProps)(SubjectComponent);