import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
    updateSubject,
    updateCourse,
    updateLesson,
    updateSection
} from '../../redux/location/location.actions';

import { OverviewPageContainer } from './overview.styles';

import OverviewBanner from '../../components/overview-banner/overview-banner.component';
import OverviewPreview from '../../components/overview-preview/overview-preview.component';


const OverviewPage = ({ unsetSection, unsetSubject, unsetLesson, unsetCourse }) => {
    
    useEffect(() => {
        unsetSubject();
        unsetCourse();
        unsetLesson();
        unsetSection();
    }, [unsetSubject, unsetCourse, unsetLesson, unsetSection])
    
    return (
    <OverviewPageContainer>
        <OverviewBanner />
        <OverviewPreview />
    </OverviewPageContainer>
)};

const mapDispatchToProps = dispatch => ({
    unsetSubject: () => dispatch(updateSubject(null)),
    unsetCourse: () => dispatch(updateCourse(null)),
    unsetLesson: () => dispatch(updateLesson(null)),
    unsetSection: () => dispatch(updateSection(null))
});

export default connect(null, mapDispatchToProps)(OverviewPage);