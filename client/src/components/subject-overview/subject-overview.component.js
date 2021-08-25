import React from 'react';

import { connect } from 'react-redux'

import {
    selectSubjectById
} from '../../redux/curriculum/curriculum.selectors';

import {
    SubjectContainer,
    SubjectTitle
} from './subject-overview.styles';


import CourseLinks from '../course-links/course-links.component';


const SubjectOverview = ({ subject }) => {

    return (
    <SubjectContainer>
            <SubjectTitle>{subject.title}</SubjectTitle>
            <CourseLinks subjectId={subject.id} />
    </SubjectContainer>
)};

const mapStateToProps = (state, ownProps) => ({
    subject: selectSubjectById(ownProps.subjectId)(state)
});


export default connect(mapStateToProps)(SubjectOverview);
