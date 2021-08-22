import React, { useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    signOutStart,
    resetEmailChangedToFalse
} from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { closeSettingsMenu } from '../../redux/dropdowns/dropdowns.actions';

import { MenuWrapper } from '../home-menu/home-menu.styles';
import {
    PopupWrapper,
    ModalBackdrop
} from './settings-menu.styles';

import SettingsModal from '../settings-modal/settings-modal.component';
import ChangeEmail from '../change-email/change-email.component';


const SettingsMenu = ({ signOut, closeSettingsMenu, currentUser, resetEmailChangedToFalse }) => {
    const [isEmailModalHidden, setIsEmailModalHidden] = useState(true);
    
    return (
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
        <PopupWrapper onClick={() => setIsEmailModalHidden(false)}>
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
    resetEmailChangedToFalse: () => dispatch(resetEmailChangedToFalse())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu);