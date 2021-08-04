import React from 'react';

import {
    SectionTitle,
    LessonList
} from './lesson-menu.styles.js';

import LessonMenuItem from '../lesson-menu-item/lesson-menu-item.component.js';


const LessonMenu = ({ section, course, subject }) => (
    <div>
        <SectionTitle>{section.title}</SectionTitle>
        <LessonList>
            {
                section.lessons.map((lesson, index) => {
                    const url = encodeURI(`/subject/${subject}/${course}/${lesson.title}`);

                    return (
                        <li key={index}>
                            <LessonMenuItem subject={subject} url={url} lesson={lesson} />
                        </li>
                    )
                })
            }
        </LessonList>
    </div>
);

export default LessonMenu;