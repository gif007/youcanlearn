import React, { useEffect, useState } from 'react';

import {
    TranscriptWrapper,
    HeadingWrapper,
    TextWrapper
} from './transcript.styles';


const Transcript = ({ lesson }) => {
    const [text, setText] = useState(null);

    useEffect(() => {
        fetch('https://baconipsum.com/api/?type=meat-and-filler')
            .then(res => res.json())
            .then(data => setText(data))
            .catch(err => console.log(err))
    }, [lesson])

    return (
        <TranscriptWrapper>
            <HeadingWrapper></HeadingWrapper>
                {
                    text ? (
                        text.map((para, index) => {
                            return <TextWrapper key={index}>{para}</TextWrapper>
                        })
                    ) : null
                }
        </TranscriptWrapper>
    )
};

export default Transcript;
