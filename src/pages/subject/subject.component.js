import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import SubjectOverview from '../../components/subject-overview/subject-overview.component';
import CourseOverview from '../../components/course-overview/course-overview.component';


const SubjectPage = ({ match }) => {
    
    return (
    <div>
        <Suspense fallback={<div>Loading ...</div>} />
        <Route exact path={`${match.path}/:subjectId`} component={SubjectOverview} />
        <Route path={`${match.path}/:subjectId/:courseId`} component={CourseOverview} />
    </div>
)};

export default SubjectPage;