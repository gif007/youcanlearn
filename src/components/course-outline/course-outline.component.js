import React from 'react';

import {
    OutlineWrapper,
    SectionList,
    LessonList,
    SectionTitle,
    SectionWrapper,
    LessonLink
} from './course-outline.styles';

import { connect } from 'react-redux'
import { selectSubject } from '../../redux/subjects/subjects.selectors';


const CourseOutline = ({ course, subjectAsArray, subject }) => {
    const selectedCourse = subjectAsArray.filter(elem => elem.title === course)[0];
    
    return (
    <OutlineWrapper>
        <SectionList>
            {
                selectedCourse.sections.map((section, index) => {
                    return (
                    <SectionWrapper key={index}>
                        <SectionTitle>{section.title}</SectionTitle>
                        <LessonList>
                            {
                                section.lessons.map((lesson, i) => {
                                    const url = encodeURI(`/subject/${subject}/${course}/${lesson.title}`);

                                    return <li key={i}><LessonLink href={url}>{lesson.title} <span>&rsaquo;</span></LessonLink></li>
                                })
                            }
                        </LessonList>
                    </SectionWrapper>
                )
                })
            }
        </SectionList>
    </OutlineWrapper>
)};

const mapStateToProps = (state, ownProps) => ({
    subjectAsArray: selectSubject(ownProps.subject)(state)
});

export default connect(mapStateToProps)(CourseOutline);
