import React from 'react';
import { withRouter } from 'react-router-dom';

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
import {
    updateSubject,
    updateCourse
} from '../../redux/location/location.actions';

import SubjectBanner from '../subject-banner/subject-banner.component';


const SubjectOverview = ({ match, subject, history, setSubject, setCourse }) => {
    const param = match.params.subjectId;

    return (
    <SubjectContainer>
        <SubjectBanner subject={param} />
            <SubjectTitle>{param === 'math' ? 'Mathematics' : 'Science'}</SubjectTitle>
            <CourseLinksContainer>
                {
                    subject.map((course, index) => {
                        const url = encodeURI(`/subject/${param}/${course.title}`);
  
                        return (
                            <CourseLink
                                onClick={() => {
                                    history.push(url);
                                    setSubject(param);
                                    setCourse(course.title)
                                }}
                                key={index}
                            >
                                <Circle subject={param}>{course.title.slice(0, 1).toUpperCase()}</Circle>
                                <CourseTitle>{course.title}</CourseTitle>
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

const mapDispatchToProps = dispatch => ({
    setSubject: (subject) => dispatch(updateSubject(subject)),
    setCourse: (course) => dispatch(updateCourse(course))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubjectOverview));
