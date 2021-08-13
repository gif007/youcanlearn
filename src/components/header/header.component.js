import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectIsSubjectMenuHidden,
    selectIsHomeMenuHidden,
    selectIsSettingsMenuHidden,
    selectIsSearchMenuHidden
} from '../../redux/dropdowns/dropdowns.selector';

import {
    closeHomeMenu,
    closeSettingsMenu,
    toggleSubjectMenuHidden,
    toggleSettingsMenuHidden,
    toggleSearchMenuHidden
} from '../../redux/dropdowns/dropdowns.actions';

import {
    HeaderWrapper,
    SubjectsGroup,
    SubjectsButton,
    SearchForm,
    LogoWrapper,
    SettingsGroup,
    SettingsButtons
} from './header.styles';

import {
    MobileButton,
    MobileLink,
    MobileButtonsContainer,
    MobileSearchForm
} from './header-mobile.styles';

import SubjectMenu from '../subject-menu/subject-menu.component';
import SettingsIcon from '../settings-icon/settings-icon.component';
import SettingsMenu from '../settings-menu/settings-menu.component';
import HomeIcon from '../home-icon/home-icon.component';
import HomeMenu from '../home-menu/home-menu.component';

import SearchGlass from '../../assets/search-20x20.png';
import Home from '../../assets/home-20x20.png';
import SubjectsIcon from '../../assets/subjects-20x20.png';
import LoginIcon from '../../assets/login-20x20.png';


const Header = ({searchMenuIsHidden, toggleSearchMenuHidden, subjectMenuIsHidden, toggleSettingsMenuHidden, homeMenuIsHidden, settingsMenuIsHidden, toggleSubjectMenuHidden, closeHomeMenu, closeSettingsMenu }) => {
    
    return (
    <HeaderWrapper>
        <MobileButtonsContainer>
            <MobileButton
                onClick={() => {
                    toggleSubjectMenuHidden();
                }}
            >
                <img src={SubjectsIcon} alt='subjects'></img>
                <span>Subjects</span>
            </MobileButton>

            <MobileLink to='/'>
                <img src={Home} alt='home'></img>
                <span>Start Here</span>
            </MobileLink>

            <MobileButton onClick={() => {
                toggleSearchMenuHidden();
            }}>
                <img src={SearchGlass} alt='search'></img>
                <span>Search</span>
            </MobileButton>

            <MobileButton onClick={() => {
                toggleSettingsMenuHidden();
            }}>
                <img src={LoginIcon} alt='login'></img>
                <span>More</span>
            </MobileButton>

            {
                searchMenuIsHidden ? null : (
                    <MobileSearchForm action='/search'  onClick={(e) => e.stopPropagation()}>
                        <fieldset>
                            <input type='search' name='q' id='search-bar' placeholder='Search lessons' />
                            <button type='submit'>
                                <img src={SearchGlass} alt='Search Glass' />
                            </button>
                        </fieldset>
                    </MobileSearchForm>
                )
            }
        </MobileButtonsContainer>

        <SubjectsGroup>
            <SubjectsButton
                type='button'
                onClick={() => {
                    toggleSubjectMenuHidden();
                    closeHomeMenu();
                    closeSettingsMenu();
                }}
            >
                Subjects &#9660;
            </SubjectsButton>
            <SearchForm action='/search'>
                <fieldset>
                    <input type='search' name='q' id='search-bar' placeholder='Search lessons' />
                    <button type='submit'>
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

        <LogoWrapper to='/'>
            YouCanLearn
        </LogoWrapper>

        <SettingsGroup>
            <SettingsButtons>
                <HomeIcon />
                <SettingsIcon />
            </SettingsButtons>
            {
                homeMenuIsHidden ? null : (
                    <HomeMenu />
                )
            }
            {
                settingsMenuIsHidden ? null : (
                    <SettingsMenu />
                )
            }
        </SettingsGroup>

    </HeaderWrapper>
)};

const mapStateToProps = createStructuredSelector({
    subjectMenuIsHidden: selectIsSubjectMenuHidden,
    homeMenuIsHidden: selectIsHomeMenuHidden,
    settingsMenuIsHidden: selectIsSettingsMenuHidden,
    searchMenuIsHidden: selectIsSearchMenuHidden
});

const mapDispatchToProps = dispatch => ({
    toggleSubjectMenuHidden: () => dispatch(toggleSubjectMenuHidden()),
    toggleSettingsMenuHidden: () => dispatch(toggleSettingsMenuHidden()),
    toggleSearchMenuHidden: () => dispatch(toggleSearchMenuHidden()),
    closeHomeMenu: () => dispatch(closeHomeMenu()),
    closeSettingsMenu: () => dispatch(closeSettingsMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);