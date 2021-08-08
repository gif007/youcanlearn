import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import {
    SubjectContainer,
    SubjectTitle
} from './subject-overview.styles';

import { connect } from 'react-redux'

import { selectSubject } from '../../redux/location/location.selectors';
import {
    updateSubject,
    updateCourse,
    updateLesson,
    updateSection
} from '../../redux/location/location.actions';

import CourseLinks from '../course-links/course-links.component';
import { createStructuredSelector } from 'reselect';


const SubjectOverview = ({ match, subject, setSubject, unsetCourse, unsetLesson, unsetSection }) => {
    if (subject === null) {
        setSubject(match.params.subjectId)
    }

    useEffect(() => {
        unsetCourse();
        unsetLesson();
        unsetSection();
    }, [unsetCourse, unsetLesson, unsetSection])


    return (
    <SubjectContainer>
            <SubjectTitle>{subject === 'math' ? 'Mathematics' : 'Science'}</SubjectTitle>
            {
                subject ? (
                    <CourseLinks subject={subject} />
                ) : null
            }
    </SubjectContainer>
)};

const mapStateToProps = createStructuredSelector({
    subject: selectSubject
});

const mapDispatchToProps = dispatch => ({
    setSubject: (subject) => dispatch(updateSubject(subject)),
    unsetCourse: () => dispatch(updateCourse(null)),
    unsetLesson: () => dispatch(updateLesson(null)),
    unsetSection: () => dispatch(updateSection(null))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubjectOverview));
