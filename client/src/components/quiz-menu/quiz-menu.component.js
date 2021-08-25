import React, { useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { toggleModalUp } from '../../redux/dropdowns/dropdowns.actions';

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


const QuizMenu = ({ lessonId, currentUser, toggleModalUp }) => {
    const [isModalHidden, setIsModalHidden] = useState(true);
    
    return (
    <MenuWrapper>
        {
            currentUser ? (
                <>
                    <ButtonWrapper onClick={() => {
                        setIsModalHidden(false);
                        toggleModalUp();
                    }}>
                        Quiz 1
                    </ButtonWrapper>
                    <Chevron>&rsaquo;</Chevron>
                    <ButtonWrapper disable={true}>Quiz 2 &#128274;</ButtonWrapper>
                    <Chevron>&rsaquo;</Chevron>
                    <ButtonWrapper disable={true}>Quiz 3 &#128274;</ButtonWrapper>
                </>
            ) : (
                <ButtonBar onClick={() => {
                    setIsModalHidden(false);
                    toggleModalUp();
                }}>Start quiz</ButtonBar>
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
                    <ModalBackdrop onClick={() => {
                        setIsModalHidden(true);
                        toggleModalUp();
                    }} />
                </>
            )
        }
    </MenuWrapper>
)};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    toggleModalUp: () => dispatch(toggleModalUp())
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizMenu);