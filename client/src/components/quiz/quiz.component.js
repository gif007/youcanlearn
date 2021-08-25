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
        .then(data => setQuestion(data.lesson))
        .catch(err => console.log(err));
    }, [setQuestion, token, lessonId])

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (answer === '3') {
            alert('Not yet implemented. Good guess though.');
        } else {
            alert('Not yet implemented');
        }
    }

    return (
        <QuizWrapper>
            <QuizHeader>

                <PointsContainer>
                    {
                        [0,1,2,3,4].map((item, index) => {
                            return <PointBlock key={index}></PointBlock>
                        })
                    }
                </PointsContainer>

                <HealthContainer>
                    {
                        [0,1].map((item, index) => {
                            return <HeartWrapper key={index} src={Heart} alt='heart' />
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
                    </AnswerForm>) : <Spinner />
                }
            </QuizContent>
        </QuizWrapper>
    )
};

const mapStateToProps = createStructuredSelector({
    token: selectUserToken
})

export default connect(mapStateToProps)(Quiz);