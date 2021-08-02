import React from 'react';

import {
    SubjectContainer,
    SubjectBanner,
    SubjectButton
} from './subject-overview.styles';

import MATH_COURSES from '../../data/math';
import SCIENCE_COURSES from '../../data/science';

const subjectMap = {
    1: MATH_COURSES,
    2: SCIENCE_COURSES
}


const Subject = ({ match }) => {
    const subject = subjectMap[match.params.subjectId];
    const subjectAsArray = Object.keys(subject).map(key => subject[key]);

    return (
    <SubjectContainer>
        <SubjectBanner subject={subject}>{ match.params.subjectId === '1' ? 'Math' : 'Science' }</SubjectBanner>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '420px'}}>
                {
                    subjectAsArray.map(section => {
                        return <SubjectButton>{section.title}</SubjectButton>
                    })
                }
            </div>
    </SubjectContainer>
)};

export default Subject;