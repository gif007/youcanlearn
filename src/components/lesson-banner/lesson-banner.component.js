import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

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
} from './lesson-banner.styles';


const LessonBanner = ({ subject, course, lesson }) => {
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
                    <LinkWrapper to={`/subject/${subject}`}>
                        <LinkText style={{width: subjectWidth}}>{subjectText}</LinkText>
                        <ArrowEnd />
                    </LinkWrapper>
                    <LinkWrapper
                        style={{paddingLeft: '2rem'}}
                        to={`/subject/${subject}/${course}`}
                    >
                        <LinkText style={{width: courseWidth}}>{course}</LinkText>
                        <ArrowEnd />
                    </LinkWrapper>
                    <PlainText style={{paddingLeft: '2rem'}}>{lesson}</PlainText>
                </>
            ) : course ? (
                <>
                    <LinkWrapper to={`/subject/${subject}`}>
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

export default connect(mapStateToProps)(LessonBanner);