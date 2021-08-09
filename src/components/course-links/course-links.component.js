import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectSubject } from '../../redux/subjects/subjects.selectors';

import { 
    CourseLinkWrapper,
    Circle,
    CourseTitle,
    CourseLinksContainer,
    LinkWrapper
} from './course-links.styles';


const CourseLink = ({ subjectAsArray, subject}) => (
    <CourseLinksContainer>
        {
            subjectAsArray.map((course, index) => {
                const url = encodeURI(`/subject/${subject}/${course.title}`);

                return (
                    <LinkWrapper key={index}>
                        <Link to={url}>
                            <CourseLinkWrapper>
                                <Circle subject={subject}>{course.title.slice(0, 1).toUpperCase()}</Circle>
                                <CourseTitle>{course.title}</CourseTitle>
                            </CourseLinkWrapper>
                        </Link>
                    </LinkWrapper>
                )
            })
        }
    </CourseLinksContainer>
);

const mapStateToProps = (state, ownProps) => ({
    subjectAsArray: selectSubject(ownProps.subject)(state)
});

export default connect(mapStateToProps)(CourseLink);