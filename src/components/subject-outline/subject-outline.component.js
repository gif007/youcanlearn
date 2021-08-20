import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectCoursesBySubject } from '../../redux/curriculum/curriculum.selectors';

import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';

import SectionOutline from '../section-outline/section-outline.component';

import {
    OutlineWrapper,
    CourseTitle
} from './subject-outline.styles';


const SubjectOutline = ({ courses, closeSubjectMenu}) => {

    return (
        <OutlineWrapper>
            <ul>
                {
                    courses.map((course, index) => {
                        const courseUrl = encodeURI(`/c/${course.id}`);

                        return (
                            <li key={index}>
                                <CourseTitle onClick={() => closeSubjectMenu()}>
                                    <Link to={courseUrl}>
                                        {course.title}
                                    </Link>
                                </CourseTitle>
                                
                                <SectionOutline courseId={course.id} />
                            </li>)
                    })
                }
            </ul>
        </OutlineWrapper>
)};

const mapStateToProps = (state, ownProps) => ({
    courses: selectCoursesBySubject(ownProps.subjectId)(state)
})

const mapDispatchToProps = dispatch => ({
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectOutline);