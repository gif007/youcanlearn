import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import SubjectOverview from '../../components/subject-overview/subject-overview.component';
import CourseOverview from '../../components/course-overview/course-overview.component';
import LessonOverview from '../../components/lesson-overview/lesson-overview.component';
import SubjectBanner from '../../components/subject-banner/subject-banner.component';


const SubjectPage = ({ match }) => {
    
    return (
    <div>
        <SubjectBanner />
        <Suspense fallback={<div>Loading ...</div>} />
        <Route exact path={`${match.path}/:subjectId`} component={SubjectOverview} />
        <Route exact path={`${match.path}/:subjectId/:courseId`} component={CourseOverview} />
        <Route path={`${match.path}/:subjectId/:courseId/:lessonId`} component={LessonOverview} />
    </div>
)};

export default SubjectPage;