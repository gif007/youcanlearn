import React, { useState } from 'react';

import { connect } from 'react-redux';

import {
    signOutStart,
    resetEmailChangedToFalse,
    resetNameChangedToFalse
} from '../../redux/user/user.actions';

import { closeSettingsMenu } from '../../redux/dropdowns/dropdowns.actions';

import { MenuWrapper } from '../home-menu/home-menu.styles';
import {
    MenuItem,
    ModalBackdrop
} from './settings-menu.styles';

import SettingsModal from '../settings-modal/settings-modal.component';
import PersonalInfo from '../personal-info/personal-info.component';
import ChangeEmail from '../change-email/change-email.component';


const SettingsMenu = ({ signOut, closeSettingsMenu, resetEmailChangedToFalse, resetNameChangedToFalse }) => {
    const [isPersonalInfoHidden, setIsPersonalInfoHidden] = useState(true);
    const [isEmailModalHidden, setIsEmailModalHidden] = useState(true);
    
    return (
    <MenuWrapper>

        <MenuItem onClick={() => setIsPersonalInfoHidden(false)}>
            Personal Information
        </MenuItem>

        <MenuItem onClick={() => alert('School: Binogi University')}>
            School and Class
        </MenuItem>

        <MenuItem onClick={() => alert('Not yet implemented')}>
            Change Password
        </MenuItem>

        <MenuItem onClick={() => setIsEmailModalHidden(false)}>
            Change Email Address
        </MenuItem>

        <MenuItem onClick={() => alert('Not yet implemented')}>
            Merge accounts
        </MenuItem>

        <MenuItem onClick={() => alert('You do not currently have an active license')}>
            Licenses
        </MenuItem>

        <MenuItem onClick={() => alert('Not yet implemented')}>
            Agreements
        </MenuItem>

        <MenuItem onClick={() => {
            signOut();
            closeSettingsMenu();
        }}>
            Logout
        </MenuItem>
        {
            isPersonalInfoHidden ? null : (
                <>
                    <SettingsModal setIsModalHidden={setIsPersonalInfoHidden}>
                        <PersonalInfo />
                    </SettingsModal>
                    <ModalBackdrop onClick={() => {
                        setIsPersonalInfoHidden(true);
                        resetNameChangedToFalse();
                    }} />
                </>
            )
        }
        {
            isEmailModalHidden ? null : (
                <>
                    <SettingsModal setIsModalHidden={setIsEmailModalHidden}>
                        <ChangeEmail />
                    </SettingsModal>
                    <ModalBackdrop onClick={() => {
                        setIsEmailModalHidden(true);
                        resetEmailChangedToFalse();
                    }} />
                </>
            )
        }
    </MenuWrapper>
)};

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart()),
    closeSettingsMenu: () => dispatch(closeSettingsMenu()),
    resetEmailChangedToFalse: () => dispatch(resetEmailChangedToFalse()),
    resetNameChangedToFalse: () => dispatch(resetNameChangedToFalse())
})

export default connect(null, mapDispatchToProps)(SettingsMenu);