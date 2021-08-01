import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

import Subject from '../../components/subject-overview/subject-overview.component';


const SubjectPage = ({ match }) => {
    console.log(match);
    
    return (
    <div>
        <Suspense fallback={<div>Loading ...</div>} />
        <Route path={`${match.path}/:subjectId`} component={Subject} />
    </div>
)};

export default SubjectPage;