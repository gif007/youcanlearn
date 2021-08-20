import React from 'react';

import { connect } from 'react-redux';

import {
    selectSectionById,
    selectLessonsBySection
} from '../../redux/curriculum/curriculum.selectors';

import {
    SectionTitle,
    LessonList
} from './lesson-menu.styles.js';

import LessonMenuItem from '../lesson-menu-item/lesson-menu-item.component.js';


const LessonMenu = ({ section, lessons, currentLesson, sectionId }) => {

    return (
    <div>
        <SectionTitle>{section.title}</SectionTitle>
        <LessonList>
            {
                lessons.map((lesson, index) => {
                    const url = encodeURI(`/l/${lesson.id}`);
                    if (lesson.title === currentLesson) {
                        return (
                            <li key={index}>
                                <LessonMenuItem url={url} lesson={lesson} currentLesson={true} />
                            </li>
                        )
                    }
                    return (
                        <li key={index}>
                            <LessonMenuItem url={url} lesson={lesson} />
                        </li>
                    )
                })
            }
        </LessonList>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    section: selectSectionById(ownProps.sectionId)(state),
    lessons: selectLessonsBySection(ownProps.sectionId)(state)
})

export default connect(mapStateToProps)(LessonMenu);