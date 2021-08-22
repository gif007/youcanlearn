import React from 'react';

import {
    QuizModalWrapper,
    CloseButton
} from './quiz-modal.styles';


const QuizModal = ({ children, setIsModalHidden }) => {

    return (
        <QuizModalWrapper>
            <CloseButton onClick={() => setIsModalHidden(true)}>&times;</CloseButton>
            {children}
        </QuizModalWrapper>
    )
};

export default QuizModal;