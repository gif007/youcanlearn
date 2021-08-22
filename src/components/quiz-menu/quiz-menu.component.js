import React, { useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
    MenuWrapper,
    ButtonWrapper,
    Chevron,
    ButtonBar,
    ModalBackdrop
} from './quiz-menu.styles';

import QuizModal from '../quiz-modal/quiz-modal.component';
import CreateAccount from '../create-account/create-account.component';
import Quiz from '../quiz/quiz.component';


const QuizMenu = ({ lessonId, currentUser }) => {
    const [isModalHidden, setIsModalHidden] = useState(true);
    
    return (
    <MenuWrapper>
        {
            currentUser ? (
                <>
                    <ButtonWrapper onClick={() => setIsModalHidden(false)}>Quiz 1</ButtonWrapper>
                    <Chevron>&rsaquo;</Chevron>
                    <ButtonWrapper disable={true}>Quiz 2 &#128274;</ButtonWrapper>
                    <Chevron>&rsaquo;</Chevron>
                    <ButtonWrapper disable={true}>Quiz 3 &#128274;</ButtonWrapper>
                </>
            ) : (
                <ButtonBar onClick={() => setIsModalHidden(false)}>Start quiz</ButtonBar>
            )
        }
        {
            isModalHidden ? null : (
                <>
                    <QuizModal setIsModalHidden={setIsModalHidden}>
                        {
                            currentUser ? (
                                <Quiz lessonId={lessonId} />
                            ) : <CreateAccount setIsModalHidden={setIsModalHidden} />
                        }
                    </QuizModal>
                    <ModalBackdrop onClick={() => setIsModalHidden(true)} />
                </>
            )
        }
    </MenuWrapper>
)};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(QuizMenu);