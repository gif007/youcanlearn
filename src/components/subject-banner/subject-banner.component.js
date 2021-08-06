import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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


const SubjectBanner = ({ subject, course, lesson, history, unsetLesson, unsetCourse }) => {
    const subjectText = subject === 'math' ? 'Mathematics' : 'Science';

    return (
    <BannerWrapper subject={subject}>
        {
            course === null ? (
                <PlainText>{subjectText}</PlainText>
            ) : (
                <div style={{display: 'flex'}}>
                    <LinkWrapper
                        to={`/subject/${subject}`}
                        onClick={() => {
                            unsetLesson();
                            unsetCourse();
                    }}>
                        {subjectText}
                    </LinkWrapper>{
                        lesson === null ? (
                            <PlainText>/{course} </PlainText>
                        ) : (
                            <div style={{display: 'flex'}}>
                                <span>/</span>
                                <div
                                    style={{color: 'white', textDecoration: 'none', cursor: 'pointer'}}
                                    onClick={() => {
                                        history.push(`/subject/${subject}/${course}`);
                                        unsetLesson();
                                    }}
                                >
                                    {course}
                                </div>
                                <PlainText>/{lesson}</PlainText>
                          </div>
                        )
                    }
                </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubjectBanner));