import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';


const LessonsList = ({section, subject, course, closeSubjectMenu}) => {
    const [lessonsVisible, setLessonsVisible] = useState(false);

    return (
        <div>
            <h2
                style={{margin: '1rem 0 .25rem 0', fontWeight: 700}}
                onClick={() => setLessonsVisible(!lessonsVisible)}
            >
                &rsaquo; {section.title}
            </h2>
            {
                lessonsVisible ? (
                    <ul>
                    {
                        section.lessons.map((lesson, index) => {
                            const lessonUrl = encodeURI(`/subject/${subject}/${course.title}/${lesson.title}`)
                            
                            return (
                                <li
                                    style={{padding: '2px 10px'}}
                                    key={index}
                                >
                                    <Link
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