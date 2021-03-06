import React from 'react';

import {
    PreviewContainer,
    PreviewHeader,
    PreviewList,
    PreviewCaption,
    PreviewButton,
    PreviewListItem,
    Shade,
    CaptionText
} from './overview-preview.styles';

import MediaLeft from '../../assets/media-arithmetic.png';
import MediaRight from '../../assets/media-watericeandsteam.png';


const OverviewPreview = () => (
    <PreviewContainer>
        <PreviewHeader>Watch any of the videos below</PreviewHeader>
        <PreviewList>
            <PreviewListItem
                to={`/l/18`}
                style={{background: `url(${MediaLeft})`}}
            >
                <Shade />
                <CaptionText>The four basic arithmetical operations</CaptionText>
            </PreviewListItem>

            <PreviewListItem
                to={`/l/7`}
                style={{background: `url(${MediaRight})`}}
            >
                <Shade />
                <CaptionText>Water, ice and steam</CaptionText>
            </PreviewListItem>
        </PreviewList>
        <PreviewCaption>Many videos are free to watch without any membership!</PreviewCaption>
        <PreviewButton type='button'>List all free lessons</PreviewButton>
    </PreviewContainer>
);

export default OverviewPreview;