import React, { useEffect, useState } from 'react';

import {
    TranscriptWrapper,
    HeadingWrapper,
    HeadingText,
    TextWrapper
} from './transcript.styles';

import Spinner from '../spinner/spinner.component';


const Transcript = ({ lessonId, subjectId }) => {
    const [text, setText] = useState(null);

    useEffect(() => {
        fetch('https://baconipsum.com/api/?type=meat-and-filler')
            .then(res => res.json())
            .then(data => setText(data))
            .catch(err => console.log(err))
    }, [lessonId])

    return (
        <TranscriptWrapper>
            <HeadingWrapper>
                <HeadingText subjectId={subjectId}>Transcript</HeadingText>
            </HeadingWrapper>
                {
                    text ? (
                        text.map((para, index) => {
                            return <TextWrapper key={index}>{para}</TextWrapper>
                        })
                    ) : <Spinner />
                }
        </TranscriptWrapper>
    )
};

export default Transcript;
