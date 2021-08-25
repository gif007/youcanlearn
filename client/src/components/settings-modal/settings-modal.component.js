import React from 'react';

import { connect } from 'react-redux';

import {
    resetEmailChangedToFalse,
    resetNameChangedToFalse
} from '../../redux/user/user.actions';

import { toggleModalUp } from '../../redux/dropdowns/dropdowns.actions';

import {
    SettingsModalWrapper,
    CloseButton
} from './settings-modal.styles';


const SettingsModal = ({ children, setIsModalHidden, resetEmailChangedToFalse, resetNameChangedToFalse, toggleModalUp }) => {

    return (
        <SettingsModalWrapper>
            <CloseButton onClick={() => {
                setIsModalHidden(true);
                resetEmailChangedToFalse();
                resetNameChangedToFalse();
                toggleModalUp();
            }}
                >&times;
            </CloseButton>
            {children}
        </SettingsModalWrapper>
    )
};

const mapDispatchToProps = dispatch => ({
    resetEmailChangedToFalse: () => dispatch(resetEmailChangedToFalse()),
    resetNameChangedToFalse: () => dispatch(resetNameChangedToFalse()),
    toggleModalUp: () => dispatch(toggleModalUp())
})

export default connect(null, mapDispatchToProps)(SettingsModal);