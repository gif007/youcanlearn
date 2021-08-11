import React, { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  closeSubjectMenu,
  closeHomeMenu,
  closeSettingsMenu
} from './redux/dropdowns/dropdowns.actions';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { createStructuredSelector } from 'reselect';

import {
  selectIsSubjectMenuHidden,
  selectIsHomeMenuHidden,
  selectIsSettingsMenuHidden
} from './redux/dropdowns/dropdowns.selector';

import { fetchSubjectStart } from './redux/subjects/subjects.actions';

const OverviewPage = lazy(() => import('./pages/overview/overview.component'));
const SubjectPage = lazy(() => import('./pages/subject/subject.component'));
const SearchPage = lazy(() => import ('./pages/search/search.component'));


const App = ({ fetchSubjects, closeSubjectMenu, closeHomeMenu, closeSettingsMenu, subjectMenuIsHidden, homeMenuIsHidden, settingsMenuIsHidden }) => {
  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects])

  return (
    <div onClick={() => {
      if (!subjectMenuIsHidden) {
        closeSubjectMenu();
      }
      if (!homeMenuIsHidden) {
        closeHomeMenu();
      }
      if (!settingsMenuIsHidden) {
        closeSettingsMenu();
      }
    }}>
      <Helmet>
        <title>YouCanLearn</title>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={OverviewPage} />
        <Route path="/subject" component={SubjectPage} />
        <Route path="/search" component={SearchPage} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  closeSubjectMenu: () => dispatch(closeSubjectMenu()),
  closeSettingsMenu: () => dispatch(closeSettingsMenu()),
  closeHomeMenu: () => dispatch(closeHomeMenu()),
  fetchSubjects: () => dispatch(fetchSubjectStart())
});

const mapStateToProps = createStructuredSelector({
  subjectMenuIsHidden: selectIsSubjectMenuHidden,
  homeMenuIsHidden: selectIsHomeMenuHidden,
  settingsMenuIsHidden: selectIsSettingsMenuHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
