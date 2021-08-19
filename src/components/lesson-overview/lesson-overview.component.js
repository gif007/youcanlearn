import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    selectLessonByName,
    selectSectionByLessonName
} from '../../redux/curriculum/curriculum.selectors';

import {
    updateLesson,
    updateSubject,
    updateCourse
} from '../../redux/location/location.actions';

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


const LessonOverview = ({ match, setSubject, setLesson, setCourse, lesson }) => {
    const [ mediaUrl, setMediaUrl ] = useState(null);
    const [ section, setSection ] = useState(false);

    const subject = match.params.subjectId;
    const course = match.params.courseId;

    let title = null;
    if (subject === 'math') {
        title = 'Mathematics - ' + lesson;
    } else {
        title = 'Science - ' + lesson;
    }

    useEffect(() => {
        // Set up the location variables so the subject banner can properly render

        // Set up the section variable for the lesson menu component
        const sections = allSubjects[subject]['courses'].find((crs) => crs.title === course)['sections'];
        const currentSection = sections.filter(sect => sect.lessons.find(lsn => lsn.title === lesson))[0];
        setSection(currentSection);
        // Prepare the media url
        const currentMediaUrl = currentSection['lessons'].find((lsn) => lsn.title === lesson).mediaUrl;
        setMediaUrl(currentMediaUrl);
    }, [allSubjects, course, lesson, subject, setSection, setCourse, setLesson, setSubject])


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

const mapDispatchToProps = dispatch => ({
    setSubject: (subject) => dispatch(updateSubject(subject)),
    setCourse: (course) => dispatch(updateCourse(course)),
    setLesson: (lesson) => dispatch(updateLesson(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonOverview);