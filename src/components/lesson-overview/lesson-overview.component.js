import React from 'react';

import { connect } from 'react-redux';
import { selectSubject } from '../../redux/subjects/subjects.selectors';

import {
    OverviewContainer,
    LessonMenuWrapper,
    ContentWrapper,
    LessonTitle
} from './lesson-overview.styles';

import SubjectBanner from '../subject-banner/subject-banner.component';
import LessonMenu from '../lesson-menu/lesson-menu.component';


const LessonOverview = ({ match, subjectAsArray }) => {
    const lesson = match.params.lessonId;
    const subject = match.params.subjectId;
    const course = match.params.courseId;

    const sections = subjectAsArray.filter((crs) => crs.title === course)[0]['sections'];
    const section = sections.filter(sect => sect.lessons.find(lsn => lsn.title === lesson))[0];

    console.log(section);
    
    return (
        <OverviewContainer>
            <SubjectBanner subject={subject} course={course} lesson={lesson} />
            <ContentWrapper>

                <LessonTitle>{lesson}</LessonTitle>

                <LessonMenuWrapper>
                    <LessonMenu course={course} subject={subject} section={section} />
                </LessonMenuWrapper>
                
            </ContentWrapper>
        </OverviewContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    subjectAsArray: selectSubject(ownProps.match.params.subjectId)(state)
});

export default connect(mapStateToProps)(LessonOverview);