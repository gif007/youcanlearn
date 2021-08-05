import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
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

const OverviewPage = lazy(() => import('./pages/overview/overview.component'));
const SubjectPage = lazy(() => import('./pages/subject/subject.component'));


const App = ({ closeSubjectMenu, closeHomeMenu, closeSettingsMenu, subjectMenuIsHidden, homeMenuIsHidden, settingsMenuIsHidden }) => {
  
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
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  closeSubjectMenu: () => dispatch(closeSubjectMenu()),
  closeSettingsMenu: () => dispatch(closeSettingsMenu()),
  closeHomeMenu: () => dispatch(closeHomeMenu())
});

const mapStateToProps = createStructuredSelector({
  subjectMenuIsHidden: selectIsSubjectMenuHidden,
  homeMenuIsHidden: selectIsHomeMenuHidden,
  settingsMenuIsHidden: selectIsSettingsMenuHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
