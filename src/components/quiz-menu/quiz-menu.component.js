import React from 'react';

import {
    MenuWrapper,
    ButtonWrapper,
    Chevron
} from './quiz-menu.styles';


const QuizMenu = ({ lessonId }) => (
    <MenuWrapper>
        <ButtonWrapper>Quiz 1</ButtonWrapper>
        <Chevron>&rsaquo;</Chevron>
        <ButtonWrapper disable={true}>Quiz 2 &#128274;</ButtonWrapper>
        <Chevron>&rsaquo;</Chevron>
        <ButtonWrapper disable={true}>Quiz 3 &#128274;</ButtonWrapper>
    </MenuWrapper>
);

export default QuizMenu;