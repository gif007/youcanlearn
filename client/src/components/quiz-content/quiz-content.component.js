import React, { useState } from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectUserToken, selectCurrentUser } from '../../redux/user/user.selectors';

import { updatePoints } from '../../redux/user/user.actions';

import axios from 'axios';

import {
    ContentWrapper,
    AnswerForm,
    CustomFieldSet,
    FormLegend,
    AnswerWrapper,
    CustomRadioButton,
    CustomLabel,
    SubmitButton
} from './quiz-content.styles';

import Spinner from '../spinner/spinner.component';


const QuizContent = ({ question, mark, result, token, lessonId, setQuestion, setResult, setScore, setHealth, setMark, currentUser, updatePoints }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(undefined);

    const handleChange = (e) => {
        setSelectedAnswer(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedAnswer === undefined) return;
        setQuestion(undefined);
        axios({
            url: '/quiz-api/submit',
            method: 'post',
            headers:  { authorization: `Bearer ${token}` },
            data: {
                answerId: selectedAnswer,
                uid: currentUser.id
            }
        })
        .then(res => res.data)
        .then(data => {
            if (data.done) {
                updatePoints(currentUser.id);
                setResult(data.result);
                setScore(data.score);
                setHealth(data.health);
                return;
            }
            setScore(data.score);
            setHealth(data.health);
            setMark(data.correct);
        })
        .catch(err => console.log(err));
    }

    const handleNext = (e) => {
        e.preventDefault();
        setMark(undefined);
        setSelectedAnswer(undefined);
        axios({
            url: '/quiz-api/next',
            method: 'post',
            headers:  { authorization: `Bearer ${token}` },
            data: {
                lessonId
            }
        })
        .then(res => res.data)
        .then(data => {
            setQuestion(data.question);
            setScore(data.score);
            setHealth(data.health);
        })
        .catch(err => console.log(err));
    }
    
    return (
    <ContentWrapper>
        { question ? (
            <AnswerForm onSubmit={handleSubmit}>
                <CustomFieldSet>
                    <FormLegend>{question.text}</FormLegend>
                    {
                        question.answers.map((answer, index) => {
                            return (
                                <AnswerWrapper key={index}>
                                    <CustomRadioButton
                                        onChange={handleChange}
                                        type='radio'
                                        id={answer.id}
                                        name='answer'
                                        value={answer.id}
                                    />
                                    <CustomLabel htmlFor={answer.id}>{answer.text}</CustomLabel>
                                </AnswerWrapper>
                            )
                        })
                    }
                    <input type='hidden' id={question.id} value={question.id} />
                    <SubmitButton type='submit'>Answer</SubmitButton>
                </CustomFieldSet>
            </AnswerForm>
        ) : mark !== undefined ? (
            <div>
                <div>{mark ? 'correct' : 'try again'}</div>
                <button onClick={handleNext} type='button'>Next question</button>
            </div>
        ) : result ? (
            <div>{result}</div>
        ) : (
            <Spinner />
        )
        }
    </ContentWrapper>
)};

const mapStateToProps = createStructuredSelector({
    token: selectUserToken,
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    updatePoints: (uid) => dispatch(updatePoints(uid))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizContent);