import React from 'react';
import { connect } from 'react-redux';

import {
    selectSubjectByLesson,
    selectCourseByLesson,
    selectLessonById
} from '../../redux/curriculum/curriculum.selectors';

import {
    BannerWrapper,
    PlainText,
    LinkWrapper,
    LinkText,
    ArrowEnd
} from './lesson-banner.styles';


const LessonBanner = ({ subject, course, lesson }) => {

    return (
    <BannerWrapper subject={subject.title}>
        <LinkWrapper to={`/s/${subject.id}`}>
            <LinkText style={{minWidth: '125px'}}>{subject.title}</LinkText>
            <ArrowEnd />
        </LinkWrapper>
        <LinkWrapper
            style={{paddingLeft: '2rem'}}
            to={`/c/${course.id}`}
        >
            <LinkText style={{minWidth: '125px'}}>{course.title}</LinkText>
            <ArrowEnd />
        </LinkWrapper>
        <PlainText style={{paddingLeft: '2rem'}}>{lesson.title}</PlainText>
    </BannerWrapper>
)};

const mapStateToProps = (state, ownProps) => ({
    subject: selectSubjectByLesson(ownProps.lessonId)(state),
    course: selectCourseByLesson(ownProps.lessonId)(state),
    lesson: selectLessonById(ownProps.lessonId)(state)
})

export default connect(mapStateToProps)(LessonBanner);