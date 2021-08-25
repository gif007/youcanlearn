import React from 'react';

import { connect } from 'react-redux';

import { toggleModalUp } from '../../redux/dropdowns/dropdowns.actions';

import {
    QuizModalWrapper,
    CloseButton
} from './quiz-modal.styles';


const QuizModal = ({ children, setIsModalHidden, toggleModalUp  }) => {

    return (
        <QuizModalWrapper>
            <CloseButton onClick={() => {
                setIsModalHidden(true);
                toggleModalUp();
            }}>
                &times;
            </CloseButton>
            {children}
        </QuizModalWrapper>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleModalUp: () => dispatch(toggleModalUp())
})

export default connect(null, mapDispatchToProps)(QuizModal);