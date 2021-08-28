import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectUserToken } from '../../redux/user/user.selectors';

import {
    QuizHeader,
    QuizWrapper,
    HorizontalRule
} from './quiz.styles';

import QuizPoints from '../quiz-points/quiz-points.component';
import QuizHealth from '../quiz-health/quiz-health.component';
import LanguageSelector from '../language-selector/language-selector.component';
import QuizContent from '../quiz-content/quiz-content.component';


const Quiz = ({ token, lessonId }) => {
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

    
    return (
        <QuizWrapper>
            <QuizHeader>
                <QuizPoints score={score} />
                <QuizHealth  health={health} />
                <LanguageSelector />
            </QuizHeader>
            <HorizontalRule />
            <QuizContent
                lessonId={lessonId}
                question={question}
                mark={mark}
                result={result}
                setQuestion={setQuestion}
                setResult={setResult}
                setScore={setScore}
                setHealth={setHealth}
                setMark={setMark}
            />
        </QuizWrapper>
    )
};

const mapStateToProps = createStructuredSelector({
    token: selectUserToken
})

export default connect(mapStateToProps)(Quiz);