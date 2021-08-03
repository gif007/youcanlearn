import React from 'react';

import { BannerWrapper } from './subject-banner.styles';


const SubjectBanner = ({ subject, course }) => {
    const subjectText = subject === 'math' ? 'Mathematics' : 'Science';

    return (
    <BannerWrapper subject={subject}>
        {
            course === undefined ? (
                <span>{subjectText}</span>
            ): (
                <span>
                    <a
                        style={{color: 'white', textDecoration: 'none'}}
                        href={`/subject/${subject}`}>
                        {subjectText}
                    </a> / {course}
                </span>
            )
        }
    </BannerWrapper>
)};

export default SubjectBanner;