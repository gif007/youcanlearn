import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectUserToken } from '../../redux/user/user.selectors';

import {
    QuizHeader,
    QuizWrapper,
    HorizontalRule,
    PointsContainer,
    PointBlock,
    HealthContainer,
    HeartWrapper,
    LanguageSelector,
    QuizContent,
    AnswerForm,
    CustomFieldSet,
    FormLegend,
    AnswerWrapper,
    CustomRadioButton,
    CustomLabel,
    SubmitButton
} from './quiz.styles';

import Heart from '../../assets/heart.png';

import Spinner from '../spinner/spinner.component';


const Quiz = ({ token, lessonId }) => {
    const [answer, setAnswer] = useState(undefined);
    const [question, setQuestion] = useState(undefined);
    const [score, setScore] = useState(0);
    const [health, setHealth] = useState(0);
    const [mark, setMark] = useState(undefined);
    const [result, setResult] = useState(undefined);

    useEffect(() => {
        axios({
            url: '/quiz-api/start',
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
    }, [setQuestion, token, lessonId])

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuestion(undefined);
        axios({
            url: '/quiz-api/submit',
            method: 'post',
            headers:  { authorization: `Bearer ${token}` },
            data: {
                answerId: answer
            }
        })
        .then(res => res.data)
        .then(data => {
            if (data.done) {
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
        <QuizWrapper>
            <QuizHeader>
                <PointsContainer>
                    {
                        [0,1,2,3,4].map((_, index) => {
                            if (index < score) {
                                return <PointBlock filled={true} key={index}></PointBlock>
                            }
                            return <PointBlock key={index}></PointBlock>
                        })
                    }
                </PointsContainer>
                <HealthContainer>
                    {
                        [0,1].map((_, index) => {
                            if (index < health) {
                                return <HeartWrapper key={index} src={Heart} alt='heart' />
                            }
                            return <div key={index} />
                        })
                    }
                </HealthContainer>
                <LanguageSelector>
                    <select onChange={() => alert('Not yet implemented')}>
                        <option>English</option>
                        <option>Swedish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Mandarin</option>
                        <option>Arabic</option>
                    </select>
                </LanguageSelector>
            </QuizHeader>
            <HorizontalRule />
            <QuizContent>
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
            </QuizContent>
        </QuizWrapper>
    )
};

const mapStateToProps = createStructuredSelector({
    token: selectUserToken
})

export default connect(mapStateToProps)(Quiz);