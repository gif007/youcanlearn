import React from 'react';

import {
    HealthContainer,
    HeartWrapper
} from './quiz-health.styles';

import Heart from '../../assets/heart.png';


const QuizHealth = ({ health }) => (
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
);

export default QuizHealth;