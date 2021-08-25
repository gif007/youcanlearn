import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';

import {
    SectionTitle,
    Chevron,
    LessonItem,
    ListWrapper
} from './lessons-list.styles';
import { selectLessonsBySection, selectSectionById } from '../../redux/curriculum/curriculum.selectors';


const LessonsList = ({section, closeSubjectMenu, lessons}) => {
    const [lessonsVisible, setLessonsVisible] = useState(false);

    return (
        <div>
            <SectionTitle
                style={{margin: '1rem 0', fontWeight: 700}}
                onClick={() => setLessonsVisible(!lessonsVisible)}
            >
                <div><Chevron lessonsVisible={lessonsVisible}>&rsaquo;</Chevron></div> {section.title}
            </SectionTitle>
            {
                lessonsVisible ? (
                    <ListWrapper>
                    {
                        lessons.map((lesson, index) => {
                            const lessonUrl = encodeURI(`/l/${lesson.id}`)
                            
                            return (
                                <LessonItem
                                    key={index}
                                >
                                    <Link
                                        style={{fontSize: '1.125rem', color: 'black'}}
                                        to={lessonUrl}
                                        onClick={() => closeSubjectMenu()}
                                    >
                                        {lesson.title}
                                    </Link>
                                </LessonItem>
                            )
                        })
                    }
                    </ListWrapper>
                ) : null
            }
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
})

const mapStateToProps = (state, ownProps) => ({
    lessons: selectLessonsBySection(ownProps.sectionId)(state),
    section: selectSectionById(ownProps.sectionId)(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonsList);