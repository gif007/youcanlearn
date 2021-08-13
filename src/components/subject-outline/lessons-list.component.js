import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';

import {
    SectionTitle,
    Chevron
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
                    <ul>
                    {
                        section.lessons.map((lesson, index) => {
                            const lessonUrl = encodeURI(`/subject/${subject}/${course.title}/${lesson.title}`)
                            
                            return (
                                <li
                                    style={{padding: '10px'}}
                                    key={index}
                                >
                                    <Link
                                        style={{fontSize: '1.125rem'}}
                                        to={lessonUrl}
                                        onClick={() => closeSubjectMenu()}
                                    >
                                        {lesson.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    </ul>
                ) : null
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
})

export default connect(null, mapDispatchToProps)(LessonsList);