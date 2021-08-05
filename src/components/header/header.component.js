import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectSubject,
    selectCourse,
    selectLesson
} from '../../redux/location/location.selectors';

import { selectIsSubjectMenuHidden } from '../../redux/dropdowns/dropdowns.selector';
import { toggleSubjectMenuHidden } from '../../redux/dropdowns/dropdowns.actions';

import {
    HeaderWrapper,
    SubjectsGroup,
    SubjectsButton,
    SearchForm,
    LogoWrapper,
    SettingsGroup
} from './header.styles';

import SubjectMenu from '../subject-menu/subject-menu.component';
import SettingsIcon from '../settings-icon/settings-icon.component';
import HomeIcon from '../home-icon/home-icon.component';

import SearchGlass from '../../assets/search.png';


const Header = ({ subject, course, lesson, subjectMenuIsHidden, toggleSubjectMenuHidden }) => {
    console.log('subject:', subject, 'course:', course, 'lesson:', lesson);
    
    const handleClick = (e) => {
        e.preventDefault();
        const searchInput = document.querySelector('input#search-bar');
        console.log(searchInput.value);
        searchInput.value = '';
        searchInput.focus();
        
    }

    return (
    <HeaderWrapper>
        <SubjectsGroup>
            <SubjectsButton
                type='button'
                onClick={(e) => {
                    e.stopPropagation();
                    toggleSubjectMenuHidden();
                }}
            >
                Subjects &#9660;
            </SubjectsButton>
            <SearchForm>
                <fieldset>
                    <input type='search' name='q' id='search-bar' placeholder='Search lessons' />
                    <button
                        type='submit'
                        onClick={handleClick}
                    >
                        <img src={SearchGlass} alt='Search Glass' />
                    </button>
                </fieldset>
            </SearchForm>
            {
                subjectMenuIsHidden ? (
                    null
                ) : <SubjectMenu />
            }
        </SubjectsGroup>

        <LogoWrapper href='/'>
            YouCanLearn
        </LogoWrapper>

        <SettingsGroup>
            <HomeIcon />
            <SettingsIcon />
        </SettingsGroup>

    </HeaderWrapper>
)};

const mapStateToProps = createStructuredSelector({
    subject: selectSubject,
    course: selectCourse,
    lesson: selectLesson,
    subjectMenuIsHidden: selectIsSubjectMenuHidden
});

const mapDispatchToProps = dispatch => ({
    toggleSubjectMenuHidden: () => dispatch(toggleSubjectMenuHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);