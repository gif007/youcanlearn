import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCourse, updateLesson, updateSubject } from '../../redux/location/location.actions';
import { selectSubject } from '../../redux/subjects/subjects.selectors';

import {
    OutlineWrapper,
    CourseTitle,
    SectionList,
    SectionWrapper
} from './subject-outline.styles';

import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';


const SubjectOutline = ({ selectedSubject, subject, setCourse, setLesson, unsetLesson, setSubject, history, closeSubjectMenu }) => {

    return (
        <OutlineWrapper>
            <ul>
                {
                    selectedSubject.map((course, index) => {
                        const courseUrl = encodeURI(`/subject/${subject}/${course.title}`);

                        return (
                            <li key={index}>
                                <CourseTitle onClick={() => {
                                    setCourse(course.title);
                                    setSubject(subject);
                                    unsetLesson();
                                    closeSubjectMenu();
                                    history.push(courseUrl)
                                }}>
                                    {course.title}
                                </CourseTitle>
                                <SectionList>
                                    {
                                        course.sections.map((section, i) => {
                                            const lessonTitle = section.lessons[0].title;
                                            const lessonUrl = encodeURI(`/subject/${subject}/${course.title}/${lessonTitle}`);
                                            
                                            return (
                                                <li key={i}>
                                                    <SectionWrapper
                                                        onClick={() => {
                                                            setCourse(course.title);
                                                            setSubject(subject);
                                                            setLesson(lessonTitle)
                                                            closeSubjectMenu();
                                                            history.push(lessonUrl)
                                                        }}
                                                    >
                                                        &rsaquo; {section.title}
                                                    </SectionWrapper>
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
    selectedSubject: selectSubject(ownProps.subject)(state)
})

const mapDispatchToProps = dispatch => ({
    setSubject: (subject) => dispatch(updateSubject(subject)),
    setCourse: (course) => dispatch(updateCourse(course)),
    setLesson: (lesson) => dispatch(updateLesson(lesson)),
    unsetLesson: () => dispatch(updateLesson(null)),
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubjectOutline));