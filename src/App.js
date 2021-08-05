import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeSubjectMenu } from './redux/dropdowns/dropdowns.actions';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const OverviewPage = lazy(() => import('./pages/overview/overview.component'));
const SubjectPage = lazy(() => import('./pages/subject/subject.component'));


const App = ({ closeSubjectMenu }) => {
  
  return (
    <div onClick={() => closeSubjectMenu()}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={OverviewPage} />
        <Route path="/subject" component={SubjectPage} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  closeSubjectMenu: () => dispatch(closeSubjectMenu())
});

export default connect(null, mapDispatchToProps)(App);
