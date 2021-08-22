import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signOutStart } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { closeSettingsMenu } from '../../redux/dropdowns/dropdowns.actions';

import { MenuWrapper } from '../home-menu/home-menu.styles';
import { PopupWrapper } from './settings-menu.styles';


const SettingsMenu = ({ signOut, closeSettingsMenu, currentUser }) => (
    <MenuWrapper>
        <PopupWrapper onClick={() => 
            alert(`Name: ${currentUser ? currentUser.fname + ' ' + currentUser.lname : null}`)
        }>
            Personal Information
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('School: Binogi University')}>
            School and Class
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('Not yet implemented')}>
            Change Password
        </PopupWrapper>
        <PopupWrapper onClick={() => alert(`Current: ${currentUser ? currentUser.email : null}`)}>
            Change Email Address
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('Not yet implemented')}>
            Merge accounts
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('You do not currently have an active license')}>
            Licenses
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('Not yet implemented')}>
            Agreements
        </PopupWrapper>
        <PopupWrapper onClick={() => {
            signOut();
            closeSettingsMenu();
        }}>
            Logout
        </PopupWrapper>
    </MenuWrapper>
);

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart()),
    closeSettingsMenu: () => dispatch(closeSettingsMenu())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu);