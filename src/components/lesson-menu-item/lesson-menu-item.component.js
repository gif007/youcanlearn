import React from 'react';

import {
    LessonLink,
    LessonTitle,
    IconWrapper,
    ChevronWrapper,
    DoubleChevronWrapper,
    LinkWrapper,
    LessonWrapper
} from './lesson-menu-item.styles'


const LessonMenuItem = ({url, subject, lesson, currentLesson}) => (
    <>
    {
        currentLesson ? (
            <LessonWrapper>
                <LessonTitle>
                    <IconWrapper subject={subject}>
                        <img src={lesson.iconUrl} alt={lesson.title} />
                    </IconWrapper>
                    {lesson.title}
                </LessonTitle>
                <DoubleChevronWrapper subject={subject}>&rsaquo;&rsaquo;</DoubleChevronWrapper>
            </LessonWrapper>
        ) : (
            <LinkWrapper>
                <LessonLink to={url}>
                    <LessonTitle>
                        <IconWrapper subject={subject}>
                            <img src={lesson.iconUrl} alt={lesson.title} />
                        </IconWrapper>
                        {lesson.title}
                    </LessonTitle>
                    <ChevronWrapper id='chevron'>&rsaquo;</ChevronWrapper>
                </LessonLink>
            </LinkWrapper>
        )
    }
    </>
);

export default LessonMenuItem;