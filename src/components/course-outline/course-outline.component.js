import React from 'react';

import {
    OutlineWrapper,
    SectionList,
    SectionWrapper
} from './course-outline.styles';

import { connect } from 'react-redux'
import { selectSubject } from '../../redux/subjects/subjects.selectors';

import LessonMenu from '../lesson-menu/lesson-menu.component';


const CourseOutline = ({ course, subjectAsArray, subject }) => {
    const selectedCourse = subjectAsArray.filter(elem => elem.title === course)[0];
    
    
    return (
    <OutlineWrapper>
        <SectionList>
            {selectedCourse.sections.map((section, index) => {
                return (
                    <SectionWrapper key={index}>
                        <LessonMenu subject={subject} section={section} course={course} />
                    </SectionWrapper>
                )
            })}
        </SectionList>
    </OutlineWrapper>
)};

const mapStateToProps = (state, ownProps) => ({
    subjectAsArray: selectSubject(ownProps.subject)(state)
});

export default connect(mapStateToProps)(CourseOutline);
