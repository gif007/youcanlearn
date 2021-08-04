import React, { useState } from 'react';

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
            <HomeIcon toggleSubjectsVisible={toggleSubjectsVisible} />
            <SettingsIcon />
        </SettingsGroup>

    </HeaderWrapper>
)};

export default Header;