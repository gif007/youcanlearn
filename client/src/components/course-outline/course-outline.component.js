import React from 'react';

import {
    OutlineWrapper,
    SectionList,
    SectionWrapper
} from './course-outline.styles';

import { connect } from 'react-redux'
import {
    selectSectionsByCourse
} from '../../redux/curriculum/curriculum.selectors';

import LessonMenu from '../lesson-menu/lesson-menu.component';


const CourseOutline = ({ sections }) => {
    
    return (
    <OutlineWrapper>
        <SectionList>
            {sections.map((section, index) => {

                return (
                    <SectionWrapper key={index}>
                        <LessonMenu sectionId={section.id} />
                    </SectionWrapper>
                )
            })}
        </SectionList>
    </OutlineWrapper>
)};

const mapStateToProps = (state, ownProps) => ({
    sections: selectSectionsByCourse(ownProps.courseId)(state)
});

export default connect(mapStateToProps)(CourseOutline);
