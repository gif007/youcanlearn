import React from 'react';

import {
    OutlineWrapper
} from './course-outline.styles';


const CourseOutline = ({ subject }) => {
    const subjectAsArray = Object.keys(subject).map(key => subject[key]);

    return (
        <OutlineWrapper>
            <ul>
                {
                    subjectAsArray.map(course => {
                        return (
                            <li>
                                <div style={{marginBottom: '0.5rem'}}>
                                    <a href='/' style={{fontWeight: 700}}>{course.title}</a>
                                </div>
                                <ul style={{marginBottom: '2rem'}}>
                                    {
                                        course.sections.map(section => {
                                            return <li style={{marginBottom: '0.25rem'}}><a href='/'>&rsaquo; {section.title}</a></li>
                                        })
                                    }
                                </ul>
                            </li>)
                    })
                }
            </ul>
        </OutlineWrapper>
)};

export default CourseOutline;