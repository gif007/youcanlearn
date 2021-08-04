import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import {
    HeaderWrapper,
    SubjectsGroup,
    SubjectsButton,
    SearchForm,
    LogoWrapper,
    SettingsGroup
} from './header.styles';

import SubjectMenu from '../subject-menu/subject-menu.component';

import SearchGlass from '../../assets/search.png';
import Home from '../../assets/home-30x30.png';
import Settings from '../../assets/settings.png';


const Header = ({ history }) => {
    const [subjectsVisible, toggleSubjectsVisible] = useState(false);
    

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
                onClick={() => toggleSubjectsVisible(!subjectsVisible)}
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
                subjectsVisible ? (
                    <SubjectMenu toggleSubjectsVisible={toggleSubjectsVisible} />
                ) : null
            }
        </SubjectsGroup>

        <LogoWrapper href='/'>
            YouCanLearn
        </LogoWrapper>

        <SettingsGroup>
            <button
                type='button'
                onClick={() => {
                    history.push('/');
                    toggleSubjectsVisible(false);
                }}
            >
                <img src={Home} alt='Home' /> &#9660;
            </button>
            <button type='button'>
                <img src={Settings} alt='Settings' /> &#9660;
            </button>
        </SettingsGroup>

    </HeaderWrapper>
)};

export default withRouter(Header);