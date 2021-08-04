import React from 'react';

import {
    LessonLink,
    LessonTitle,
    IconWrapper,
    ChevronWrapper
} from './lesson-menu-item.styles'


const LessonMenuItem = ({url, subject, lesson}) => (
    <div>
        <LessonLink href={url}>
            <LessonTitle>
                <IconWrapper subject={subject}>
                    <img src={lesson.iconUrl} alt={lesson.title} />
                </IconWrapper>
                {lesson.title}
            </LessonTitle>
            <ChevronWrapper id='chevron'>&rsaquo;</ChevronWrapper>
        </LessonLink>
    </div>
);

export default LessonMenuItem;