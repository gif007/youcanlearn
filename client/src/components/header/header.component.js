import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectIsSubjectMenuHidden,
    selectIsHomeMenuHidden,
    selectIsSettingsMenuHidden,
    selectIsSearchMenuHidden
} from '../../redux/dropdowns/dropdowns.selector';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
    closeHomeMenu,
    closeSettingsMenu,
    toggleSubjectMenuHidden,
    toggleSettingsMenuHidden,
    toggleSearchMenuHidden,
    closeSubjectMenu,
    closeSearchMenu
} from '../../redux/dropdowns/dropdowns.actions';

import {
    HeaderWrapper,
    DropdownMenuBackdrop,
    SubjectsGroup,
    SubjectsButton,
    SearchForm,
    LogoWrapper,
    SettingsGroup,
    SettingsButtons,
    SignUpButton,
    LoginButton
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
import Dots from '../../assets/dots.png';
import LoginIcon from '../../assets/login_icon.png';


const Header = ({currentUser, searchMenuIsHidden, closeSearchMenu, toggleSearchMenuHidden, subjectMenuIsHidden, toggleSettingsMenuHidden, homeMenuIsHidden, settingsMenuIsHidden, toggleSubjectMenuHidden, closeHomeMenu, closeSettingsMenu, closeSubjectMenu }) => {

    return (
    <HeaderWrapper>
        <MobileButtonsContainer>
            <MobileButton
                onClick={() => {
                    toggleSubjectMenuHidden();
                    closeSearchMenu();
                    closeSettingsMenu();
                }}
            >
                <img src={SubjectsIcon} alt='subjects'></img>
                <span>Subjects</span>
            </MobileButton>

            <MobileLink
                to='/'
                onClick={() => {
                    closeSubjectMenu();
                    closeSettingsMenu();
                    closeSearchMenu();
                }}
            >
                <img src={Home} alt='home'></img>
                <span>Start Here</span>
            </MobileLink>

            <MobileButton onClick={() => {
                toggleSearchMenuHidden();
                closeSubjectMenu();
                closeSettingsMenu();
            }}>
                <img src={SearchGlass} alt='search'></img>
                <span>Search</span>
            </MobileButton>

            {
                currentUser ? (
                    <MobileButton onClick={() => {
                        toggleSettingsMenuHidden();
                        closeSubjectMenu();
                        closeSearchMenu();
                    }}>
                        <img src={Dots} alt='settings'></img>
                        <span>More</span>
                    </MobileButton>
                ) : (
                    <MobileLink
                        to='/login'
                        onClick={() => {
                            closeSubjectMenu();
                            closeSearchMenu();
                        }}
                    >
                        <img src={LoginIcon} alt='login' />
                        <span>Login</span>
                    </MobileLink>
                )
            }


            {
                searchMenuIsHidden ? null : (
                    <MobileSearchForm action='/search'>
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
                ) : (
                    <>
                        <SubjectMenu />
                        <DropdownMenuBackdrop onClick={() => closeSubjectMenu()} />
                    </>
                )
            }
        </SubjectsGroup>

        <LogoWrapper to='/'>
            YouCanLearn
        </LogoWrapper>

        <SettingsGroup>
            <SettingsButtons>
                {
                    currentUser ? (
                        <>
                            <HomeIcon />
                            <SettingsIcon />
                        </>
                    ) : (
                        <>
                            <LoginButton to='/login'>Login</LoginButton>
                            <SignUpButton to='/signup'>Sign up</SignUpButton>
                        </>
                    )
                }
            </SettingsButtons>
            {
                homeMenuIsHidden ? null : (
                    <>
                        <HomeMenu />
                        <DropdownMenuBackdrop onClick={() => closeHomeMenu()} />
                    </>
                )
            }
            {
                settingsMenuIsHidden ? null : (
                    <>
                        <SettingsMenu />
                        <DropdownMenuBackdrop onClick={() => closeSettingsMenu()} />
                    </>
                )
            }
        </SettingsGroup>

    </HeaderWrapper>
)};

const mapStateToProps = createStructuredSelector({
    subjectMenuIsHidden: selectIsSubjectMenuHidden,
    homeMenuIsHidden: selectIsHomeMenuHidden,
    settingsMenuIsHidden: selectIsSettingsMenuHidden,
    searchMenuIsHidden: selectIsSearchMenuHidden,
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    toggleSubjectMenuHidden: () => dispatch(toggleSubjectMenuHidden()),
    toggleSettingsMenuHidden: () => dispatch(toggleSettingsMenuHidden()),
    toggleSearchMenuHidden: () => dispatch(toggleSearchMenuHidden()),
    closeHomeMenu: () => dispatch(closeHomeMenu()),
    closeSettingsMenu: () => dispatch(closeSettingsMenu()),
    closeSubjectMenu: () => dispatch(closeSubjectMenu()),
    closeSearchMenu: () => dispatch(closeSearchMenu())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);