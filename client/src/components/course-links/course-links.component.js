import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import {
    selectSubjectById,
    selectCoursesBySubject
} from '../../redux/curriculum/curriculum.selectors';

import { 
    CourseLinkWrapper,
    Circle,
    CourseTitle,
    CourseLinksContainer,
    LinkWrapper
} from './course-links.styles';


const CourseLink = ({ subject, aCourses }) => {
    
    return (
    <CourseLinksContainer>
        {
            aCourses.map((course, index) => {
                const url = encodeURI(`/c/${course.id}`);

                return (
                    <LinkWrapper key={index}>
                        <Link to={url}>
                            <CourseLinkWrapper>
                                <Circle subject={subject.id}>{course.title.slice(0, 1)}</Circle>
                                <CourseTitle>{course.title}</CourseTitle>
                            </CourseLinkWrapper>
                        </Link>
                    </LinkWrapper>
                )
            })
        }
    </CourseLinksContainer>
)};

const mapStateToProps = (state, ownProps) => ({
    subject: selectSubjectById(ownProps.subjectId)(state),
    aCourses: selectCoursesBySubject(ownProps.subjectId)(state)
});

export default connect(mapStateToProps)(CourseLink);