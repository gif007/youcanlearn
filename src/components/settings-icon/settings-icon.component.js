import React from 'react';

import { connect } from 'react-redux';

import { closeHomeMenu, closeSubjectMenu, toggleSettingsMenuHidden } from '../../redux/dropdowns/dropdowns.actions';

import { IconWrapper } from './settings-icon.styles';

import Settings from '../../assets/settings.png';


const SettingsIcon = ({ toggleMenu, closeHomeMenu, closeSubjectMenu }) => (
    <IconWrapper
        type='button'
        onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
            closeHomeMenu();
            closeSubjectMenu();
        }}>
        <img src={Settings} alt='Settings' /> &#9660;
    </IconWrapper>
);

const mapDispatchToProps = dispatch => ({
    toggleMenu: () => dispatch(toggleSettingsMenuHidden()),
    closeHomeMenu: () => dispatch(closeHomeMenu()),
    closeSubjectMenu: () => dispatch(closeSubjectMenu())
});

export default connect(null, mapDispatchToProps)(SettingsIcon);