import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectUserToken } from '../../redux/user/user.selectors';

import {
    QuizWrapper
} from './quiz.styles';


const Quiz = ({ token }) => {

    return (
        <QuizWrapper>
            <span>Not yet implemented</span>
        </QuizWrapper>
    )
};

const mapStateToProps = createStructuredSelector({
    token: selectUserToken
})

export default connect(mapStateToProps)(Quiz);