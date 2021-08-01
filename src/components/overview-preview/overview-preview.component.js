import React from 'react';

import {
    PreviewContainer,
    PreviewHeader,
    PreviewList,
    PreviewCaption
} from './overview-preview.styles';


const OverviewPreview = () => (
    <PreviewContainer>
        <PreviewHeader>Watch any of the videos below</PreviewHeader>
        <PreviewList>
            <div>Preview 1</div>
            <div>Preview 2</div>
        </PreviewList>
        <PreviewCaption>Many videos are free to watch without any membership!</PreviewCaption>
        <button type='button'>List all free lessons</button>
    </PreviewContainer>
);

export default OverviewPreview;