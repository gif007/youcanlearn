import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSubjectsData } from '../../redux/subjects/subjects.selectors';

import {
    selectSubject,
    selectCourse,
    selectLesson,
    selectSection
} from '../../redux/location/location.selectors';

import {
    updateLesson,
    updateSubject,
    updateCourse,
    updateSection
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


const LessonOverview = ({ match, subject, setSubject, lesson, setLesson, course, setCourse, allSubjects, section, setSection }) => {
    const [ mediaUrl, setMediaUrl ] = useState(null);


    if (lesson === null) {
        setLesson(match.params.lessonId);
        setSubject(match.params.subjectId);
        setCourse(match.params.courseId);
    }

    useEffect(() => {
        if (subject === null || course === null) {
            return;
        }
        if (section !== null) {
            const currentMediaUrl = section['lessons'].find((lsn) => lsn.title === lesson).mediaUrl;
            setMediaUrl(currentMediaUrl);
            return;
        }
        const sections = allSubjects[subject][course]['sections'];
        const currentSection = sections.filter(sect => sect.lessons.find(lsn => lsn.title === lesson))[0];
        setSection(currentSection);
    }, [allSubjects, course, lesson, subject, section, setSection])

    let title = null;
    if (subject === 'math') {
        title = 'Mathematics';
    } else {
        title = 'Science'
    }

    title = title + ' - ' + lesson;

    
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
                <LessonTitle>{lesson}</LessonTitle>
                <MediaWrapper>
                    {
                        mediaUrl ? (
                            <div style={{background: `url(${mediaUrl})`}} />
                        ) : null
                    }
                </MediaWrapper>
                <QuizMenuWrapper>
                    <QuizMenu lesson={lesson} />
                </QuizMenuWrapper>
                <TranscriptWrapper>
                    <Transcript lesson={lesson} subject={subject} />
                </TranscriptWrapper>
            </ContentWrapper>
        </OverviewContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    subject: selectSubject,
    course: selectCourse,
    lesson: selectLesson,
    section: selectSection,
    allSubjects: selectSubjectsData
});

const mapDispatchToProps = dispatch => ({
    setSubject: (subject) => dispatch(updateSubject(subject)),
    setCourse: (course) => dispatch(updateCourse(course)),
    setLesson: (lesson) => dispatch(updateLesson(lesson)),
    setSection: (section) => dispatch(updateSection(section))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonOverview);