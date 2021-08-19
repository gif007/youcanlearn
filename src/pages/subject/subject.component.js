import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectIsCurriculumFetching } from '../../redux/curriculum/curriculum.selectors';
import { createStructuredSelector } from 'reselect';

import SubjectOverview from '../../components/subject-overview/subject-overview.component';
import CourseOverview from '../../components/course-overview/course-overview.component';
import LessonOverview from '../../components/lesson-overview/lesson-overview.component';
import SubjectBanner from '../../components/subject-banner/subject-banner.component';

import Spinner from '../../components/spinner/spinner.component';



const SubjectPage = ({ match, isLoading }) => {
    
    return isLoading ? (
        <div style={{height: '60vh', background: 'white'}}><Spinner /></div>
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
    isLoading: selectIsCurriculumFetching
})

export default connect(mapStateToProps)(SubjectPage);