import React from 'react';

import {
    SectionTitle,
    LessonList
} from './lesson-menu.styles.js';

import LessonMenuItem from '../lesson-menu-item/lesson-menu-item.component.js';


const LessonMenu = ({ section, course, subject, currentLesson }) => (
    <div>
        <SectionTitle>{section.title}</SectionTitle>
        <LessonList>
            {
                section.lessons.map((lesson, index) => {
                    const url = encodeURI(`/subject/${subject}/${course}/${lesson.title}`);
                    if (lesson.title === currentLesson) {
                        return (
                            <li key={index}>
                                <LessonMenuItem course={course} subject={subject} url={url} lesson={lesson} currentLesson={true} />
                            </li>
                        )
                    }
                    return (
                        <li key={index}>
                            <LessonMenuItem course={course} subject={subject} url={url} lesson={lesson} />
                        </li>
                    )
                })
            }
        </LessonList>
    </div>
);

export default LessonMenu;