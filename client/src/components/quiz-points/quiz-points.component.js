import React from 'react';

import {
    PointsContainer,
    PointBlock
} from './quiz-points.styles';


const QuizPoints = ({ score }) => (
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
);

export default QuizPoints;