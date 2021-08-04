import React from 'react';

import { BannerWrapper } from './subject-banner.styles';


const SubjectBanner = ({ subject, course, lesson }) => {
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
                    </a>{
                        lesson === undefined ? (
                            <span> / {course} </span>
                        ) : (
                            <span> / <a style={{color: 'white', textDecoration: 'none'}} href={`/subject/${subject}/${course}`}>{course}</a> / {lesson}</span>
                        )
                    }
                </span>
            )
        }
    </BannerWrapper>
)};

export default SubjectBanner;