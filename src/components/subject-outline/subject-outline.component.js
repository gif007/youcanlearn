import React from 'react';

import { connect } from 'react-redux';
import { selectSubject } from '../../redux/subjects/subjects.selectors';

import {
    OutlineWrapper
} from './subject-outline.styles';


const SubjectOutline = ({ selectedSubject, subject }) => {

    return (
        <OutlineWrapper>
            <ul>
                {
                    selectedSubject.map((course, index) => {
                        const courseUrl = encodeURI(`/subject/${subject}/${course.title}`);

                        return (
                            <li key={index}>
                                <div style={{marginBottom: '0.5rem'}}>
                                    <a href={courseUrl} style={{fontWeight: 700}}>{course.title}</a>
                                </div>
                                <ul style={{marginBottom: '2rem'}}>
                                    {
                                        course.sections.map((section, i) => {
                                            const lessonUrl = encodeURI(`/subject/${subject}/${course.title}/${section.lessons[0].title}`);

                                            return <li key={i} style={{marginBottom: '0.25rem'}}><a href={lessonUrl}>&rsaquo; {section.title}</a></li>
                                        })
                                    }
                                </ul>
                            </li>)
                    })
                }
            </ul>
        </OutlineWrapper>
)};

const mapStateToProps = (state, ownProps) => ({
    selectedSubject: selectSubject(ownProps.subject)(state)
})

export default connect(mapStateToProps)(SubjectOutline);