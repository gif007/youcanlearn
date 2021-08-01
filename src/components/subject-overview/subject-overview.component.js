import React from 'react';

import {
    SubjectContainer,
    SubjectBanner
} from './subject-overview.styles';

const subjectMap = {
    1: 'Mathematics',
    2: 'Science'
};


const Subject = ({ match }) => {
    const subject = subjectMap[match.params.subjectId]

    return (
    <SubjectContainer>
        <SubjectBanner subject={subject}>
            {subject}
        </SubjectBanner>
    </SubjectContainer>
)};

export default Subject;