import React from 'react';

import { connect } from 'react-redux';

import {
    selectIsCurriculumFetching
} from '../../redux/curriculum/curriculum.selectors';

import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/spinner/spinner.component';

import LessonOverview from '../../components/lesson-overview/lesson-overview.component';
import LessonBanner from '../../components/lesson-banner/lesson-banner.component';


const LessonPage = ({ match, isLoading }) => {
    const lessonId = match.params.lessonId

    return isLoading ? <Spinner /> : (
        <div>
            <LessonBanner lessonId={lessonId} />
            <LessonOverview lessonId={lessonId} />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCurriculumFetching
})

export default connect(mapStateToProps)(LessonPage);