import React from 'react';

import { connect } from 'react-redux';

import {
    selectCourseById,
    selectSubjectByCourse
} from '../../redux/curriculum/curriculum.selectors';

import {
    BannerWrapper,
    PlainText,
    LinkWrapper,
    LinkText,
    ArrowEnd
} from './course-banner.styles';


const CourseBanner = ({ course, subject }) => {

    return (
    <BannerWrapper subject={subject.title}>
    <LinkWrapper to={`/s/${subject.id}`}>
            <LinkText>{subject.title}</LinkText>
            <ArrowEnd />
        </LinkWrapper>
        <PlainText >{course.title}</PlainText>
    </BannerWrapper>
)};

const mapStateToProps = (state, ownProps) => ({
    course: selectCourseById(ownProps.courseId)(state),
    subject: selectSubjectByCourse(ownProps.courseId)(state)
})

export default connect(mapStateToProps)(CourseBanner);