import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';

import { selectSubjects } from '../../redux/subjects/subjects.selectors';

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
    LessonTitle
} from './lesson-overview.styles';

import LessonMenu from '../lesson-menu/lesson-menu.component';
import { createStructuredSelector } from 'reselect';


const LessonOverview = ({ match, subject, setSubject, lesson, setLesson, course, setCourse, allSubjects }) => {
    const [ section, setSection ] = useState(null);

    if (lesson === null) {
        setLesson(match.params.lessonId);
        setSubject(match.params.subjectId);
        setCourse(match.params.courseId);
    }

    useEffect(() => {
        if (!subject) {
            return;
        }
        const sections = allSubjects[subject][course]['sections'];
        const section2 = sections.filter(sect => sect.lessons.find(lsn => lsn.title === lesson))[0];
        setSection(section2);
    }, [allSubjects, course, lesson, subject])

    let title = null;
    if (subject === 'math') {
        title = 'Mathematics';
    } else if (subject === 'science') {
        title = 'Science'
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
                            <LessonMenu course={course} subject={subject} section={section} />
                        ) : null
                    }
                </div>
            </LessonMenuWrapper>
            
            <ContentWrapper>
                <LessonTitle>{lesson}</LessonTitle>
            </ContentWrapper>
        </OverviewContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    subject: selectSubject,
    course: selectCourse,
    lesson: selectLesson,
    allSubjects: selectSubjects
});

const mapDispatchToProps = dispatch => ({
    setSubject: (subject) => dispatch(updateSubject(subject)),
    setCourse: (course) => dispatch(updateCourse(course)),
    setLesson: (lesson) => dispatch(updateLesson(lesson))
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonOverview);