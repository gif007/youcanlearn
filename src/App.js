import React, { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import { connect } from 'react-redux';

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


const App = ({ fetchCurriculumStart }) => {
  useEffect(() => {
    fetchCurriculumStart()
  }, [fetchCurriculumStart])

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
            <Route exact path="/" component={OverviewPage} />
            <Route path="/s/:subjectId" component={SubjectPage} />
            <Route path="/c/:courseId" component={CoursePage} />
            <Route path="/l/:lessonId" component={LessonPage} />
            <Route path="/search" component={SearchPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCurriculumStart: () => dispatch(fetchCurriculumStart())
});

export default connect(null, mapDispatchToProps)(App);
