import React from 'react';

import {
    SubjectContainer,
    SubjectTitle,
    CourseLink,
    Circle,
    CourseTitle,
    CourseLinksContainer
} from './subject-overview.styles';

import { connect } from 'react-redux'
import { selectSubject } from '../../redux/subjects/subjects.selectors';

import SubjectBanner from '../subject-banner/subject-banner.component';


const SubjectOverview = ({ match, subject }) => {
    const param = match.params.subjectId;

    return (
    <SubjectContainer>
        <SubjectBanner subject={param} />
            <SubjectTitle>{param === 'math' ? 'Mathematics' : 'Science'}</SubjectTitle>
            <CourseLinksContainer>
                {
                    subject.map((section, index) => {
                        const url = encodeURI(`/subject/${param}/${section.title}`);
  
                        return (
                            <CourseLink href={url} key={index}>
                                <Circle subject={param}>{section.title.slice(0, 1).toUpperCase()}</Circle>
                                <CourseTitle>{section.title}</CourseTitle>
                            </CourseLink>
                        )
                    })
                }
            </CourseLinksContainer>
    </SubjectContainer>
)};

const mapStateToProps = (state, ownProps) => ({
    subject: selectSubject(ownProps.match.params.subjectId)(state)
});

export default connect(mapStateToProps)(SubjectOverview);
