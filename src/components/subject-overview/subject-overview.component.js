import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    SubjectContainer,
    SubjectTitle
} from './subject-overview.styles';

import { connect } from 'react-redux'

import { selectSubject } from '../../redux/location/location.selectors';
import { updateSubject } from '../../redux/location/location.actions';

import CourseLinks from '../course-links/course-links.component';
import { createStructuredSelector } from 'reselect';


const SubjectOverview = ({ match, subject, setSubject }) => {
    if (subject === null) {
        setSubject(match.params.subjectId)
    }

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
    setSubject: (subject) => dispatch(updateSubject(subject))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubjectOverview));
