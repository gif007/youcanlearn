import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectSubjectsIsFetching } from '../../redux/subjects/subjects.selectors';
import { createStructuredSelector } from 'reselect';

import SubjectOverview from '../../components/subject-overview/subject-overview.component';
import CourseOverview from '../../components/course-overview/course-overview.component';
import LessonOverview from '../../components/lesson-overview/lesson-overview.component';
import SubjectBanner from '../../components/subject-banner/subject-banner.component';



const SubjectPage = ({ match, isLoading }) => {
    
    return isLoading ? (
        <div>Wait!  I'm loading...</div>
    ) : (
    <div>
        <SubjectBanner />
        <Suspense fallback={<div>Loading ...</div>} />
        <Route exact path={`${match.path}/:subjectId`} component={SubjectOverview} />
        <Route exact path={`${match.path}/:subjectId/:courseId`} component={CourseOverview} />
        <Route path={`${match.path}/:subjectId/:courseId/:lessonId`} component={LessonOverview} />
    </div>
)};

const mapStateToProps = createStructuredSelector({
    isLoading: selectSubjectsIsFetching
})

export default connect(mapStateToProps)(SubjectPage);