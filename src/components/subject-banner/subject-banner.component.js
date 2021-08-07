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
    LinkWrapper,
    LinkText,
    ArrowEnd
} from './subject-banner.styles';


const SubjectBanner = ({ subject, course, lesson, unsetLesson, unsetCourse }) => {
    const subjectText = subject === 'math' ? 'Mathematics' : 'Science';
    let subjectWidth = subjectText.length * 11;
    subjectWidth = subjectWidth + 'px';

    let courseWidth = 0;
    if (course !== null) {
        courseWidth = course.length * 9;
        courseWidth = courseWidth + 'px';
    }


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
                        <LinkText style={{width: subjectWidth}}>{subjectText}</LinkText>
                        <ArrowEnd />
                    </LinkWrapper>
                    <LinkWrapper
                        style={{paddingLeft: '2rem'}}
                        to={`/subject/${subject}/${course}`}
                        onClick={() => {
                            unsetLesson();
                        }}
                    >
                        <LinkText style={{width: courseWidth}}>{course}</LinkText>
                        <ArrowEnd />
                    </LinkWrapper>
                    <PlainText style={{paddingLeft: '2rem'}}>{lesson}</PlainText>
                </>
            ) : course ? (
                <>
                    <LinkWrapper
                        to={`/subject/${subject}`}
                        onClick={() => {
                            unsetCourse();
                        }}
                    >
                        <LinkText style={{width: subjectWidth}}>{subjectText}</LinkText>
                        <ArrowEnd />
                    </LinkWrapper>
                    <PlainText style={{paddingLeft: '2rem'}}>{course}</PlainText>
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