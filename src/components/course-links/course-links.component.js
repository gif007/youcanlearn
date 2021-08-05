import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectSubject } from '../../redux/subjects/subjects.selectors';

import { updateSubject, updateCourse } from '../../redux/location/location.actions';

import { 
    CourseLinkWrapper,
    Circle,
    CourseTitle,
    CourseLinksContainer,
    LinkWrapper
} from './course-links.styles';


const CourseLink = ({ subjectAsArray, subject, setSubject, setCourse }) => (
    <CourseLinksContainer>
        {
            subjectAsArray.map((course, index) => {
                const url = encodeURI(`/subject/${subject}/${course.title}`);

                return (
                    <LinkWrapper>
                        <Link to={url}>
                            <CourseLinkWrapper
                                onClick={() => {
                                    setSubject(subject);
                                    setCourse(course.title)
                                }}
                                key={index}
                            >
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

const mapDispatchToProps = dispatch => ({
    setSubject: subject => dispatch(updateSubject(subject)),
    setCourse: course => dispatch(updateCourse(course))
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseLink);