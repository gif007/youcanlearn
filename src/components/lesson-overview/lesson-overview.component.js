import React from 'react';
import { Helmet } from 'react-helmet-async';

import { connect } from 'react-redux';

import {
    selectLessonByName
} from '../../redux/curriculum/curriculum.selectors';

import {
    OverviewContainer,
    LessonMenuWrapper,
    ContentWrapper,
    LessonTitle,
    MediaWrapper,
    QuizMenuWrapper,
    TranscriptWrapper
} from './lesson-overview.styles';

import LessonMenu from '../lesson-menu/lesson-menu.component';
import Transcript from '../transcript/transcript.component';
import QuizMenu from '../quiz-menu/quiz-menu.component';


const LessonOverview = ({ lesson }) => {
    const subject = 'math';
    const section = 'section';
    const course = 'course';

    let title = null;
    if (subject === 'math') {
        title = 'Mathematics - ' + lesson;
    } else {
        title = 'Science - ' + lesson;
    }


    return (
        <OverviewContainer>
            <Helmet>
                {
                    title ? (
                        <title>{title}</title>
                    ) : null
                }
            </Helmet>
            <LessonMenuWrapper>
                <div id='border-container'>
                    {
                        section ? (
                            <LessonMenu course={course} subject={subject} section={section} currentLesson={lesson} />
                        ) : null
                    }
                </div>
            </LessonMenuWrapper>
            
            <ContentWrapper>
                <LessonTitle>{lesson.title}</LessonTitle>
                <MediaWrapper>
                    <img src={lesson.mediaUrl} alt='media' />
                </MediaWrapper>
                <QuizMenuWrapper>
                    <QuizMenu lesson={lesson.title} />
                </QuizMenuWrapper>
                <TranscriptWrapper>
                    <Transcript lesson={lesson.title} subject={subject} />
                </TranscriptWrapper>
            </ContentWrapper>
        </OverviewContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    lesson: selectLessonByName(ownProps.match.params.lessonId)(state)
});

export default connect(mapStateToProps)(LessonOverview);