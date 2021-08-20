import React from 'react';

import { OverviewPageContainer } from './overview.styles';

import OverviewBanner from '../../components/overview-banner/overview-banner.component';
import OverviewPreview from '../../components/overview-preview/overview-preview.component';


const OverviewPage = () => {
    
    return (
    <OverviewPageContainer>
        <OverviewBanner />
        <OverviewPreview />
    </OverviewPageContainer>
)};

export default OverviewPage;