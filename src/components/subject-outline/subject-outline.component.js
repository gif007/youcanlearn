import React from 'react';
import { Link } from 'react-router-dom';

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


const SubjectOutline = ({ selectedSubject, subject, setCourse, setLesson, unsetLesson, setSubject, closeSubjectMenu }) => {

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
                                }}>
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
                                                        onClick={() => {
                                                            setCourse(course.title);
                                                            setSubject(subject);
                                                            setLesson(lessonTitle)
                                                            closeSubjectMenu();
                                                        }}
                                                    >
                                                        <Link to={lessonUrl}>
                                                            &rsaquo; {section.title}
                                                        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(SubjectOutline);