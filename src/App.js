import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { connect } from 'react-redux';

import {
  closeSubjectMenu,
  closeHomeMenu,
  closeSettingsMenu,
  closeSearchMenu
} from './redux/dropdowns/dropdowns.actions';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.component';

import { createStructuredSelector } from 'reselect';

import {
  selectIsSubjectMenuHidden,
  selectIsHomeMenuHidden,
  selectIsSettingsMenuHidden,
  selectIsSearchMenuHidden
} from './redux/dropdowns/dropdowns.selector';


const OverviewPage = lazy(() => import('./pages/overview/overview.component'));
const SubjectPage = lazy(() => import('./pages/subject/subject.component'));
const SearchPage = lazy(() => import ('./pages/search/search.component'));
const DataDump = lazy(() => import ('./pages/data-dump/data-dump.component'));


const App = ({ searchMenuIsHidden, closeSearchMenu, closeSubjectMenu, closeHomeMenu, closeSettingsMenu, subjectMenuIsHidden, homeMenuIsHidden, settingsMenuIsHidden }) => {

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
      if (!searchMenuIsHidden) {
        closeSearchMenu();
      }
    }}>
      <Helmet>
        <title>YouCanLearn</title>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<div style={{height: '60vh', background: 'white'}}><Spinner /></div>}>
            <Route exact path="/" component={OverviewPage} />
            <Route path="/subject" component={SubjectPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/datadump" component={DataDump} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  closeSubjectMenu: () => dispatch(closeSubjectMenu()),
  closeSettingsMenu: () => dispatch(closeSettingsMenu()),
  closeHomeMenu: () => dispatch(closeHomeMenu()),
  closeSearchMenu: () => dispatch(closeSearchMenu())
});

const mapStateToProps = createStructuredSelector({
  subjectMenuIsHidden: selectIsSubjectMenuHidden,
  homeMenuIsHidden: selectIsHomeMenuHidden,
  settingsMenuIsHidden: selectIsSettingsMenuHidden,
  searchMenuIsHidden: selectIsSearchMenuHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
