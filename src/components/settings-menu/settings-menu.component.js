import React from 'react';

import { MenuWrapper } from '../home-menu/home-menu.styles';
import { PopupWrapper } from './settings-menu.styles';


const SettingsMenu = () => (
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
        <PopupWrapper onClick={() => alert('Thanks for visiting!')}>
            Logout
        </PopupWrapper>
    </MenuWrapper>
);

export default SettingsMenu;