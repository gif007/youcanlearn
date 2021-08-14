import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';

import {
    SectionTitle,
    Chevron,
    LessonItem,
    ListWrapper
} from './lessons-list.styles';


const LessonsList = ({section, subject, course, closeSubjectMenu}) => {
    const [lessonsVisible, setLessonsVisible] = useState(false);

    return (
        <div>
            <SectionTitle
                style={{margin: '1rem 0', fontWeight: 700}}
                onClick={() => setLessonsVisible(!lessonsVisible)}
            >
                <div><Chevron lessonsVisible={lessonsVisible}>&rsaquo;</Chevron></div> {section.title}
            </SectionTitle>
            {
                lessonsVisible ? (
                    <ListWrapper>
                    {
                        section.lessons.map((lesson, index) => {
                            const lessonUrl = encodeURI(`/subject/${subject}/${course.title}/${lesson.title}`)
                            
                            return (
                                <LessonItem
                                    key={index}
                                >
                                    <Link
                                        style={{fontSize: '1.125rem', color: 'black'}}
                                        to={lessonUrl}
                                        onClick={() => closeSubjectMenu()}
                                    >
                                        {lesson.title}
                                    </Link>
                                </LessonItem>
                            )
                        })
                    }
                    </ListWrapper>
                ) : null
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
})

export default connect(null, mapDispatchToProps)(LessonsList);