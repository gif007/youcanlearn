import React from 'react';

import { connect } from 'react-redux';

import {
    resetEmailChangedToFalse,
    resetNameChangedToFalse
} from '../../redux/user/user.actions';

import {
    SettingsModalWrapper,
    CloseButton
} from './settings-modal.styles';


const SettingsModal = ({ children, setIsModalHidden, resetEmailChangedToFalse, resetNameChangedToFalse }) => {

    return (
        <SettingsModalWrapper>
            <CloseButton onClick={() => {
                setIsModalHidden(true);
                resetEmailChangedToFalse();
                resetNameChangedToFalse();
            }}
                >&times;
            </CloseButton>
            {children}
        </SettingsModalWrapper>
    )
};

const mapDispatchToProps = dispatch => ({
    resetEmailChangedToFalse: () => dispatch(resetEmailChangedToFalse()),
    resetNameChangedToFalse: () => dispatch(resetNameChangedToFalse())
})

export default connect(null, mapDispatchToProps)(SettingsModal);