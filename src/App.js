import React, { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, Redirect } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { fetchCurriculumStart } from './redux/curriculum/curriculum.actions';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.component';

const OverviewPage = lazy(() => import('./pages/overview/overview.component'));
const SubjectPage = lazy(() => import('./pages/subject/subject.page'));
const CoursePage = lazy(() => import('./pages/course/course.page'));
const LessonPage = lazy(() => import('./pages/lesson/lesson.page'));
const SearchPage = lazy(() => import ('./pages/search/search.component'));
const SignInPage = lazy(() => import ('./pages/sign-in/sign-in.page'));
const SignUpPage = lazy(() => import ('./pages/sign-up/sign-up.page'));


const App = ({ fetchCurriculumStart, currentUser, checkUserSession }) => {
  useEffect(() => {
    fetchCurriculumStart();
    checkUserSession();
  }, [fetchCurriculumStart, checkUserSession])

  return (
    <div>
      <Helmet>
        <title>YouCanLearn</title>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<div style={{height: '60vh', background: 'white'}}><Spinner /></div>}>
            <Route exact path="/" render={() => 
            currentUser ? (
              <OverviewPage />
            ) : (
              <Redirect to='/login' />
            )
            }/>
            <Route path="/s/:subjectId" component={SubjectPage} />
            <Route path="/c/:courseId" component={CoursePage} />
            <Route path="/l/:lessonId" component={LessonPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/login" render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInPage />
              )
            }/>
            <Route exact path="/signup" render={() =>
              currentUser ? (
              <Redirect to='/' />
              ) : (
              <SignUpPage />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCurriculumStart: () => dispatch(fetchCurriculumStart()),
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
