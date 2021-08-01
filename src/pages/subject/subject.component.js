import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Science = () => (
    <div>I'm blinded by Science</div>
);

const Maths = () => (
    <div>Ahhh Math!</div>
);


const SubjectPage = ({ match }) => (
    <Switch>
        <Suspense fallback={<div>Loading ...</div>} />
        <Route path={`${match.path}/1`} component={Maths} />
        <Route path={`${match.path}/2`} component={Science} />
    </Switch>
);

export default SubjectPage;