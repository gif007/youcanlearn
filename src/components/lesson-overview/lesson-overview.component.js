import React from 'react';
import { Helmet } from 'react-helmet-async';

import { connect } from 'react-redux';

import {
    selectLessonById,
    selectSubjectByLesson
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


const LessonOverview = ({ lesson, subject }) => {
    const title = subject.title + ' - ' + lesson.title;

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
                    <LessonMenu sectionId={lesson.section} currentLesson={lesson.title} />
                </div>
            </LessonMenuWrapper>
            
            <ContentWrapper>
                <LessonTitle>{lesson.title}</LessonTitle>
                <MediaWrapper>
                    <img src={lesson.mediaUrl} alt='media' />
                </MediaWrapper>
                <QuizMenuWrapper>
                    <QuizMenu lessonId={lesson.id} />
                </QuizMenuWrapper>
                <TranscriptWrapper>
                    <Transcript lessonId={lesson.id} subjectId={lesson.subject} />
                </TranscriptWrapper>
            </ContentWrapper>
        </OverviewContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    lesson: selectLessonById(ownProps.lessonId)(state),
    subject: selectSubjectByLesson(ownProps.lessonId)(state)
});

export default connect(mapStateToProps)(LessonOverview);