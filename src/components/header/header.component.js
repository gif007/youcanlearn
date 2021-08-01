import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import {
    HeaderWrapper,
    SubjectsGroup,
    SubjectsButton,
    SubjectsMenu,
    SearchForm,
    MenuArea,
    MenuItem,
    ContentArea,
    LogoWrapper,
    SettingsGroup
} from './header.styles';

import SearchGlass from '../../assets/search.png';
import Home from '../../assets/home-36x36.png';
import Settings from '../../assets/settings.png';


const Header = ({ history }) => {
    const [subjectsVisible, toggleSubjectsVisible] = useState(false);
    const [currentSubject, setCurrentSubject] = useState('math');
    const [mathBg, setMathBg] = useState('white');
    const [scienceBg, setScienceBg] = useState('white');

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
                    <SubjectsMenu>
                        <MenuArea>

                            <MenuItem
                                onMouseEnter={() => {
                                    setCurrentSubject('math');
                                    setMathBg('rgb(99, 181, 61)');
                                    setScienceBg('white');
                                }}
                                bg={mathBg}
                                onClick={() => {
                                    history.push('/s/1');
                                    toggleSubjectsVisible(false);
                                }}
                            >
                                <span>Mathematics</span>
                                <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
                            </MenuItem>

                            <MenuItem
                                onMouseEnter={() => {
                                    setCurrentSubject('science');
                                    setMathBg('white');
                                    setScienceBg('rgb(0, 161, 113)');
                                }}
                                bg={scienceBg}
                                onClick={() => {
                                    history.push('/s/2');
                                    toggleSubjectsVisible(false);
                                }}
                            >
                                <span>Science</span>
                                <span style={{fontSize: '1.5rem', fontWeight: 700}}>&rsaquo;</span>
                            </MenuItem>

                        </MenuArea>
                        <ContentArea subject={currentSubject}>
                            {
                                currentSubject === 'math' ? (
                                    <div>Maaaath</div>
                                ) : (
                                    <div>Science!</div>
                                )
                            }
                        </ContentArea>
                    </SubjectsMenu>
                ) : null
            }
        </SubjectsGroup>

        <LogoWrapper>Learn</LogoWrapper>

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