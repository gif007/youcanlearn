import React from 'react';

import { connect } from 'react-redux';

import { closeSettingsMenu, closeSubjectMenu, toggleHomeMenuHidden } from '../../redux/dropdowns/dropdowns.actions';

import { IconWrapper } from '../settings-icon/settings-icon.styles';

import Home from '../../assets/home-30x30.png';


const HomeIcon = ({ toggleHomeMenu, closeSubjectMenu, closeSettingsMenu }) => (
    <IconWrapper
        type='button'
        onClick={(e) => {
            e.stopPropagation();
            closeSubjectMenu();
            closeSettingsMenu();
            toggleHomeMenu();
        }}
    >
        <img src={Home} alt='Home' /> &#9660;
    </IconWrapper>
);

const mapDispatchToProps = dispatch => ({
    toggleHomeMenu: () => dispatch(toggleHomeMenuHidden()),
    closeSubjectMenu: () => dispatch(closeSubjectMenu()),
    closeSettingsMenu: () => dispatch(closeSettingsMenu())
})

export default connect(null, mapDispatchToProps)(HomeIcon);