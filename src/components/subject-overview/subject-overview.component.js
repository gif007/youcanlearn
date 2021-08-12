import React, { useEffect } from 'react';

import {
    SubjectContainer,
    SubjectTitle
} from './subject-overview.styles';

import { connect } from 'react-redux'

import {
    updateSubject,
    updateCourse,
    updateLesson
} from '../../redux/location/location.actions';

import CourseLinks from '../course-links/course-links.component';


const SubjectOverview = ({ match, setSubject, unsetCourse, unsetLesson }) => {
    
    const subject = match.params.subjectId;

    useEffect(() => {
        setSubject(subject);
        unsetCourse();
        unsetLesson();
    }, [unsetCourse, unsetLesson, setSubject, subject])


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

const mapDispatchToProps = dispatch => ({
    setSubject: (subject) => dispatch(updateSubject(subject)),
    unsetCourse: () => dispatch(updateCourse(null)),
    unsetLesson: () => dispatch(updateLesson(null))
})

export default connect(null, mapDispatchToProps)(SubjectOverview);
