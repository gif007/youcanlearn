import React from 'react';

import { connect } from 'react-redux';

import { resetEmailChangedToFalse } from '../../redux/user/user.actions';

import {
    SettingsModalWrapper,
    CloseButton
} from './settings-modal.styles';


const SettingsModal = ({ children, setIsModalHidden, resetEmailChangedToFalse }) => {

    return (
        <SettingsModalWrapper>
            <CloseButton onClick={() => {
                setIsModalHidden(true);
                resetEmailChangedToFalse();
            }}
                >&times;
            </CloseButton>
            {children}
        </SettingsModalWrapper>
    )
};

const mapDispatchToProps = dispatch => ({
    resetEmailChangedToFalse: () => dispatch(resetEmailChangedToFalse())
})

export default connect(null, mapDispatchToProps)(SettingsModal);