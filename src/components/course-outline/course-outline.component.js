import React from 'react';

import {
    OutlineWrapper,
    SectionList,
    LessonList,
    SectionTitle
} from './course-outline.styles';

import { connect } from 'react-redux'
import { selectSubject } from '../../redux/subjects/subjects.selectors';


const CourseOutline = ({ course, subjectAsArray }) => {
    const selectedCourse = subjectAsArray.filter(elem => elem.title === course)[0];
    
    return (
    <OutlineWrapper>
        <SectionList>
            {
                selectedCourse.sections.map((section, index) => {
                    return (
                    <li key={index}>
                        <SectionTitle>{section.title}</SectionTitle>
                        <LessonList>
                            {
                                section.lessons.map((lesson, i) => {
                                    return <li key={i}>{lesson.title}</li>
                                })
                            }
                        </LessonList>
                    </li>
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
