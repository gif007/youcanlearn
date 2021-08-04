import React from 'react';
import { withRouter } from 'react-router-dom';

import { IconWrapper } from '../settings-icon/settings-icon.styles';

import Home from '../../assets/home-30x30.png';


const HomeIcon = ({ toggleSubjectsVisible, history }) => (
    <IconWrapper
        type='button'
        onClick={() => {
            history.push('/');
            toggleSubjectsVisible(false);
        }}
    >
        <img src={Home} alt='Home' /> &#9660;
    </IconWrapper>
);

export default withRouter(HomeIcon);