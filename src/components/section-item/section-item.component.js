import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { selectLessonsBySection, selectSectionById } from '../../redux/curriculum/curriculum.selectors';

import { closeSubjectMenu } from '../../redux/dropdowns/dropdowns.actions';

import {
    SectionWrapper,
    MobileSectionWrapper
} from './section-item.styles';

import LessonsList from '../lessons-list/lessons-list.component';


const SectionItem = ({ section, lessons, closeSubjectMenu }) => {
    const lessonUrl = encodeURI(`/l/${lessons[0].id}`);
    return (
        <>
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
                <LessonsList sectionId={section.id} />
            </MobileSectionWrapper>
        </>
    )
};

const mapStateToProps = (state, ownProps) => ({
    lessons: selectLessonsBySection(ownProps.sectionId)(state),
    section: selectSectionById(ownProps.sectionId)(state)
});

const mapDispatchToProps = dispatch => ({
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
});

export default connect(mapStateToProps ,mapDispatchToProps)(SectionItem);