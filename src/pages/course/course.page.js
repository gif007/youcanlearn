import React from 'react';

import { connect } from 'react-redux';
import {
    selectIsCurriculumFetching
} from '../../redux/curriculum/curriculum.selectors';
import { createStructuredSelector } from 'reselect';

import Spinner from '../../components/spinner/spinner.component';

import CourseOverview from '../../components/course-overview/course-overview.component';
import CourseBanner from '../../components/course-banner/course-banner.component';


const CoursePage = ({ match, isLoading }) => {
    const courseId = match.params.courseId

    return isLoading ? <Spinner /> : (
        <div>
            <CourseBanner courseId={courseId} />
            <CourseOverview courseId={courseId} />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCurriculumFetching
})

export default connect(mapStateToProps)(CoursePage);