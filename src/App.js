import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

const OverviewPage = lazy(() => import('./pages/overview/overview.component'));
const SubjectPage = lazy(() => import('./pages/subject/subject.component'));


const App = () => {
  
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={OverviewPage} />
        <Route exact path="/s" component={SubjectPage} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
