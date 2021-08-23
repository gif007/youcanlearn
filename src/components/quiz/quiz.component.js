import React from 'react';

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


const Quiz = ({ token, lessonId }) => {
    console.log(lessonId);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Not yet implemented')
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
                <AnswerForm onSubmit={handleSubmit}>
                    <CustomFieldSet>
                        <FormLegend>Which of these things is not like the other?</FormLegend>
                        <AnswerWrapper>
                            <CustomRadioButton type='radio' id='1' name='answer' value='1' />
                            <CustomLabel htmlFor='1'>The broad side of a barn</CustomLabel>
                        </AnswerWrapper>
                        <AnswerWrapper>
                            <CustomRadioButton type='radio' id='2' name='answer' value='2' />
                            <CustomLabel htmlFor='2'>An army of Deadites</CustomLabel>
                        </AnswerWrapper>
                        <AnswerWrapper>
                            <CustomRadioButton type='radio' id='3' name='answer' value='3' />
                            <CustomLabel htmlFor='3'>An African Swallow carrying a coconut</CustomLabel>
                        </AnswerWrapper>
                        <AnswerWrapper>
                            <CustomRadioButton type='radio' id='4' name='answer' value='4' />
                            <CustomLabel htmlFor='4'>The square root of pi</CustomLabel>
                        </AnswerWrapper>
                        <SubmitButton type='submit'>Answer</SubmitButton>
                    </CustomFieldSet>
                </AnswerForm>
            </QuizContent>
        </QuizWrapper>
    )
};

const mapStateToProps = createStructuredSelector({
    token: selectUserToken
})

export default connect(mapStateToProps)(Quiz);