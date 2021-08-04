import React from 'react';

import { IconWrapper } from './settings-icon.styles';

import Settings from '../../assets/settings.png';


const SettingsIcon = () => (
    <IconWrapper type='button'>
        <img src={Settings} alt='Settings' /> &#9660;
    </IconWrapper>
);

export default SettingsIcon;