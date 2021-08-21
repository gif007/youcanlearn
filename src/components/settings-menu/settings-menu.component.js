import React from 'react';

import { connect } from 'react-redux';

import { signOutStart } from '../../redux/user/user.actions';
import { closeSettingsMenu } from '../../redux/dropdowns/dropdowns.actions';

import { MenuWrapper } from '../home-menu/home-menu.styles';
import { PopupWrapper } from './settings-menu.styles';


const SettingsMenu = ({ signOut, closeSettingsMenu }) => (
    <MenuWrapper>
        <PopupWrapper onClick={() => alert('Name: Guest')}>
            Personal Information
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('School: Binogi University')}>
            School and Class
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('Not implemented for guest account')}>
            Change Password
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('Not implemented for guest account')}>
            Change Email Address
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('Not implemented for guest account')}>
            Merge accounts
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('You do not currently have an active license')}>
            Licenses
        </PopupWrapper>
        <PopupWrapper onClick={() => alert('Thanks for clicking me')}>
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

export default connect(null, mapDispatchToProps)(SettingsMenu);