import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import {
    HeaderWrapper,
    SubjectsGroup,
    SubjectsButton,
    SubjectsMenu,
    MenuArea,
    MenuItem,
    ContentArea,
    SettingsGroup
} from './header.styles';


const Header = ({ history }) => {
    const [subjectsVisible, toggleSubjectsVisible] = useState(false);
    const [currentSubject, setCurrentSubject] = useState('math');
    const [mathBg, setMathBg] = useState('white');
    const [scienceBg, setScienceBg] = useState('white');

    return (
    <HeaderWrapper>
        <SubjectsGroup>
            <SubjectsButton
                type='button'
                onClick={() => toggleSubjectsVisible(!subjectsVisible)}
            >
                Subjects &#9660;
            </SubjectsButton>
            <form>
                <fieldset>
                    <input type='search' name='q' id='search-bar' placeholder='Search lessons' />
                    <button type='submit'>Search glass</button>
                </fieldset>
            </form>
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

        <div>Logo</div>

        <SettingsGroup>
            <button
                type='button'
                onClick={() => {
                    history.push('/');
                    toggleSubjectsVisible(false);
                }}
            >Home</button>
            <button type='button'>Settings</button>
        </SettingsGroup>

    </HeaderWrapper>
)};

export default withRouter(Header);