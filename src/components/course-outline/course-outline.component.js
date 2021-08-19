import React from 'react';

import {
    OutlineWrapper,
    SectionList,
    SectionWrapper
} from './course-outline.styles';

import { connect } from 'react-redux'
import { selectSubjectByName } from '../../redux/curriculum/curriculum.selectors';

import LessonMenu from '../lesson-menu/lesson-menu.component';


const CourseOutline = ({ course, subjectObject, subject }) => {
    const selectedCourse = subjectObject['courses'].find((crs) => crs.title === course);
    
    
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
    subjectObject: selectSubjectByName(ownProps.subject)(state)
});

export default connect(mapStateToProps)(CourseOutline);
