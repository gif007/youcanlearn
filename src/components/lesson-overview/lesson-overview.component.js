import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSubjectsData } from '../../redux/subjects/subjects.selectors';

import {
    selectSubject,
    selectCourse,
    selectLesson
} from '../../redux/location/location.selectors';

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
    QuizMenu,
    TranscriptWrapper
} from './lesson-overview.styles';

import LessonMenu from '../lesson-menu/lesson-menu.component';
import Transcript from '../transcript/transcript.component';


const LessonOverview = ({ match, subject, setSubject, lesson, setLesson, course, setCourse, allSubjects }) => {
    const [ section, setSection ] = useState(null);
    const [ mediaUrl, setMediaUrl ] = useState(null);


    if (lesson === null) {
        setLesson(match.params.lessonId);
        setSubject(match.params.subjectId);
        setCourse(match.params.courseId);
    }

    useEffect(() => {
        if (!subject) {
            return;
        }
        if (section) {
            const currentMediaUrl = section['lessons'].find((lsn) => lsn.title === lesson).mediaUrl;
            setMediaUrl(currentMediaUrl);
            return;
        }
        const sections = allSubjects[subject][course]['sections'];
        const currentSection = sections.filter(sect => sect.lessons.find(lsn => lsn.title === lesson))[0];
        setSection(currentSection);
    }, [allSubjects, course, lesson, subject, section])

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
                            <LessonMenu course={course} subject={subject} section={section} />
                        ) : null
                    }
                </div>
            </LessonMenuWrapper>
            
            <ContentWrapper>
                <LessonTitle>{lesson}</LessonTitle>
                <MediaWrapper>
                    {
                        mediaUrl ? (
                            <img src={mediaUrl} alt='media' />
                        ) : null
                    }
                </MediaWrapper>
                <QuizMenu>QuizMenu: This is going to be its own component</QuizMenu>
                <TranscriptWrapper>
                    <Transcript lesson={lesson} />
                </TranscriptWrapper>
            </ContentWrapper>
        </OverviewContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    subject: selectSubject,
    course: selectCourse,
    lesson: selectLesson,
    allSubjects: selectSubjectsData
});

const mapDispatchToProps = dispatch => ({
    setSubject: (subject) => dispatch(updateSubject(subject)),
    setCourse: (course) => dispatch(updateCourse(course)),
    setLesson: (lesson) => dispatch(updateLesson(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonOverview);