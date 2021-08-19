import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectSubjectByName } from '../../redux/curriculum/curriculum.selectors';
import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';

import {
    OutlineWrapper,
    CourseTitle,
    SectionList,
    SectionWrapper,
    MobileSectionWrapper
} from './subject-outline.styles';

import LessonsList from './lessons-list.component';


const SubjectOutline = ({ selectedSubject, subject, closeSubjectMenu}) => {

    return (
        <OutlineWrapper>
            <ul>
                {
                    selectedSubject.courses.map((course, index) => {
                        const courseUrl = encodeURI(`/subject/${subject}/${course.title}`);

                        return (
                            <li key={index}>
                                <CourseTitle onClick={() => closeSubjectMenu()}>
                                    <Link to={courseUrl}>
                                        {course.title}
                                    </Link>
                                </CourseTitle>
                                
                                <SectionList>
                                    {
                                        course.sections.map((section, i) => {
                                            const lessonTitle = section.lessons[0].title;
                                            const lessonUrl = encodeURI(`/subject/${subject}/${course.title}/${lessonTitle}`);
                                            
                                            return (
                                                <li key={i}>
                                                    <SectionWrapper
                                                        onClick={() => closeSubjectMenu()}
                                                    >
                                                        <Link
                                                            to={lessonUrl}
                                                        >
                                                            &rsaquo; {section.title}
                                                        </Link>
                                                    </SectionWrapper>
                                                    <MobileSectionWrapper>
                                                        <LessonsList section={section} subject={subject} course={course} />
                                                    </MobileSectionWrapper>
                                                </li>
                                            )
                                        })
                                    }
                                </SectionList>
                            </li>)
                    })
                }
            </ul>
        </OutlineWrapper>
)};

const mapStateToProps = (state, ownProps) => ({
    selectedSubject: selectSubjectByName(ownProps.subject)(state)
})

const mapDispatchToProps = dispatch => ({
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectOutline);