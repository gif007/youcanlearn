import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { updateCourse, updateLesson } from '../../redux/location/location.actions';

import {
    selectSubject,
    selectCourse,
    selectLesson
} from '../../redux/location/location.selectors';

import {
    BannerWrapper,
    PlainText,
    LinkWrapper
} from './subject-banner.styles';


const SubjectBanner = ({ subject, course, lesson, unsetLesson, unsetCourse }) => {
    const subjectText = subject === 'math' ? 'Mathematics' : 'Science';

    return (
    <BannerWrapper subject={subject}>
        {
            lesson ? (
                <>
                    <LinkWrapper
                        to={`/subject/${subject}`}
                        onClick={() => {
                            unsetLesson();
                            unsetCourse();
                        }}
                    >
                        {subjectText}
                    </LinkWrapper>
                    <LinkWrapper
                        to={`/subject/${subject}/${course}`}
                        onClick={() => {
                            unsetLesson();
                        }}
                    >
                        {course}
                    </LinkWrapper>
                    <PlainText>{lesson}</PlainText>
                </>
            ) : course ? (
                <>
                    <LinkWrapper
                        to={`/subject/${subject}`}
                        onClick={() => {
                            unsetCourse();
                        }}
                    >
                        {subjectText}
                    </LinkWrapper>
                    <PlainText>{course}</PlainText>
                </>
            ) : (
                <PlainText>{subjectText}</PlainText>
            )
        }
    </BannerWrapper>
)};

const mapStateToProps = createStructuredSelector({
    subject: selectSubject,
    course: selectCourse,
    lesson: selectLesson
});

const mapDispatchToProps = dispatch => ({
    unsetLesson: () => dispatch(updateLesson(null)),
    unsetCourse: () => dispatch(updateCourse(null))
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectBanner);