import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectSubjectById } from '../../redux/curriculum/curriculum.selectors';

import { 
    CourseLinkWrapper,
    Circle,
    CourseTitle,
    CourseLinksContainer,
    LinkWrapper
} from './course-links.styles';


const CourseLink = ({ subjectObject, subject}) => (
    <CourseLinksContainer>
        {
            subjectObject['courses'].map((course, index) => {
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
    subjectObject: selectSubjectById(ownProps.subject)(state)
});

export default connect(mapStateToProps)(CourseLink);