import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeSubjectMenu } from './redux/dropdowns/dropdowns.actions';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { createStructuredSelector } from 'reselect';
import { selectIsSubjectMenuHidden } from './redux/dropdowns/dropdowns.selector';

const OverviewPage = lazy(() => import('./pages/overview/overview.component'));
const SubjectPage = lazy(() => import('./pages/subject/subject.component'));


const App = ({ closeSubjectMenu, subjectMenuIsHidden }) => {
  
  return (
    <div onClick={() => {
      if (!subjectMenuIsHidden) {
        closeSubjectMenu();
      }
      }}>
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

const mapStateToProps = createStructuredSelector({
  subjectMenuIsHidden: selectIsSubjectMenuHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
